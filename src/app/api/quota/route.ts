import { type NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const VISITOR_DAILY_QUOTA = 50;

export async function GET(request: NextRequest) {
  try {
    const visitorId = request.headers.get("x-visitor-id");
    const ip = (request.headers.get("x-forwarded-for") ?? "127.0.0.1")
      .split(",")[0]
      .trim();

    const identifier = visitorId || ip;

    if (!identifier) {
      return NextResponse.json(
        { error: "Identifier not found" },
        { status: 400 }
      );
    }

    const twentyFourHoursAgo = new Date(
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

    const { count, error } = await query.gte("created_at", twentyFourHoursAgo);

    if (error) {
      console.error("Supabase quota check error:", error.message);
      return NextResponse.json({
        remaining: VISITOR_DAILY_QUOTA,
        limit: VISITOR_DAILY_QUOTA,
      });
    }

    const remaining = VISITOR_DAILY_QUOTA - (count || 0);

    return NextResponse.json({
      remaining: Math.max(0, remaining),
      limit: VISITOR_DAILY_QUOTA,
    });
  } catch (e) {
    console.error("Quota API error:", e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
