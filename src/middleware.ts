import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";
import { rateLimiter } from "@/lib/security";

// Bikin middleware yang lebih robust buat production
const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // Security headers buat semua response
  const response = intlMiddleware(request);

  // Rate limiting buat API routes
  if (request.nextUrl.pathname.startsWith("/api/")) {
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // 100 requests per 15 menit per IP - adjust sesuai kebutuhan
    const isAllowed = rateLimiter.isAllowed(ip, 100, 15 * 60 * 1000);

    if (!isAllowed) {
      return new NextResponse(
        JSON.stringify({
          error: "Slow down bro! Terlalu banyak request",
          retryAfter: "15 minutes",
        }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "Retry-After": "900", // 15 menit dalam seconds
          },
        }
      );
    }
  }

  // Tambahin security headers
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  // Basic CSP - bisa di-customize sesuai kebutuhan
  response.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:;"
  );

  return response;
}

export const config = {
  matcher: "/((?!_next|_vercel|.*\\..*).*)",
};
