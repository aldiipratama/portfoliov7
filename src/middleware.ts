import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Supabase URL or Anon Key is missing in environment variables."
  );
}

const supabase = createClient(supabaseUrl, supabaseKey);

export const SESSION_QUOTA = 20;
const IP_RATE_LIMIT_COUNT = 10;
const IP_RATE_LIMIT_DURATION = 60;
const VISITOR_DAILY_QUOTA = 50;

export default async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/api/chat")) {
    console.log("Processing /api/chat request");
    const ip = (request.headers.get("x-forwarded-for") ?? "127.0.0.1")
      .split(",")[0]
      .trim();
    const sessionId = request.headers.get("x-session-id");
    const visitorId = request.headers.get("x-visitor-id");

    const primaryIdentifier = visitorId || ip;

    if (ip === "unknown") {
      return NextResponse.json(
        { error: "Tidak dapat mengidentifikasi pengguna" },
        { status: 400 }
      );
    }

    const ipRateLimitCheck = async () => {
      const startTime = new Date(
        Date.now() - IP_RATE_LIMIT_DURATION * 1000
      ).toISOString();

      return supabase
        .from("rate_limit_logs")
        .select("id", { count: "exact", head: true })
        .eq("ip_address", ip)
        .gte("created_at", startTime);
    };

    const sessionQuotaCheck = async () => {
      if (!sessionId) return { count: 0, error: null };
      return supabase
        .from("rate_limit_logs")
        .select("id", { count: "exact", head: true })
        .eq("session_id", sessionId);
    };

    const dailyQuotaCheck = async () => {
      const startOfDay = new Date(
        Date.now() - 24 * 60 * 60 * 1000
      ).toISOString();

      let query = supabase
        .from("rate_limit_logs")
        .select("id", { count: "exact", head: true });

      if (visitorId) {
        query = query.eq("visitor_id", visitorId);
      } else {
        query = query.eq("ip_address", ip);
      }

      return query.gte("created_at", startOfDay);
    };

    try {
      const [ipResult, sessionResult, dailyResult] = await Promise.all([
        ipRateLimitCheck(),
        sessionQuotaCheck(),
        dailyQuotaCheck(),
      ]);

      if (dailyResult.error)
        console.error("IP Daily Check Error:", dailyResult.error.message);
      if (
        dailyResult.count !== null &&
        dailyResult.count >= VISITOR_DAILY_QUOTA
      ) {
        console.warn(
          `Kuota harian dicapai untuk pengidentifikasi: ${primaryIdentifier}`
        );
        return NextResponse.json(
          {
            error:
              "Batas permintaan untuk browser/jaringan Anda telah dicapai hari ini. Silakan coba lagi besok.",
            reason: "daily_quota_exceeded",
          },
          { status: 429 }
        );
      }

      if (sessionResult.error)
        console.error(
          "Supabase Session Check Error:",
          sessionResult.error.message
        );
      if (
        sessionResult.count !== null &&
        sessionResult.count >= SESSION_QUOTA
      ) {
        console.warn("Kuota sesi dicapai untuk sesi:", sessionId);
        return NextResponse.json(
          {
            error:
              "Anda telah mencapai batas pesan untuk sesi ini. Harap segarkan halaman untuk memulai percakapan baru.",
            reason: "session_quota_exceeded",
          },
          { status: 403 }
        );
      }

      if (ipResult.error)
        console.error("IP Rate Limit Check Error:", ipResult.error.message);
      if (ipResult.count !== null && ipResult.count >= IP_RATE_LIMIT_COUNT) {
        console.warn("Rate limit exceeded for IP:", ip);
        return NextResponse.json(
          {
            error: "Anda mengirim pesan terlalu cepat.",
            reason: "ip_rate_limited_exceeded",
          },
          { status: 429 }
        );
      }

      const remainingDaily = VISITOR_DAILY_QUOTA - (dailyResult.count || 0);
      const response = NextResponse.next();
      response.headers.set(
        "X-Daily-Quota-Remaining",
        remainingDaily.toString()
      );
      response.headers.set(
        "X-Daily-Quota-Limit",
        VISITOR_DAILY_QUOTA.toString()
      );

      supabase
        .from("rate_limit_logs")
        .insert({
          ip_address: ip,
          session_id: sessionId,
          visitor_id: visitorId,
        })
        .then(({ error }) => {
          if (error) console.error("Failed to log request:", error.message);
        });

      return response;
    } catch (error) {
      console.error("Middleware internal error:", error);
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/chat", "/api/quota"],
};
