import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

// Schema for analytics event
const analyticsEventSchema = z.object({
  eventType: z.string(),
  eventData: z.record(z.string(), z.unknown()).optional(),
  sessionId: z.string().optional(),
});

// GET: Retrieve analytics data
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const eventType = searchParams.get("eventType");
    const limit = searchParams.get("limit");
    const days = searchParams.get("days");

    const whereClause: Record<string, unknown> = {};

    if (eventType) {
      whereClause.eventType = eventType;
    }

    if (days) {
      const daysAgo = new Date();
      daysAgo.setDate(daysAgo.getDate() - parseInt(days));
      whereClause.createdAt = {
        gte: daysAgo,
      };
    }

    const analytics = await prisma.analytics.findMany({
      where: whereClause,
      orderBy: { createdAt: "desc" },
      take: limit ? parseInt(limit) : undefined,
    });

    return NextResponse.json({ success: true, data: analytics });
  } catch (error) {
    console.error("Error fetching analytics:", error);
    return NextResponse.json(
      { success: false, error: "Gagal mengambil data analytics" },
      { status: 500 }
    );
  }
}

// POST: Log analytics event
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = analyticsEventSchema.parse(body);

    const analytics = await prisma.analytics.create({
      data: {
        eventType: validatedData.eventType,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        eventData: validatedData.eventData as any,
        sessionId: validatedData.sessionId,
        userAgent: request.headers.get("user-agent"),
        ipAddress:
          request.headers.get("x-forwarded-for") ||
          request.headers.get("x-real-ip") ||
          "unknown",
      },
    });

    return NextResponse.json({ success: true, data: analytics });
  } catch (error) {
    console.error("Error logging analytics:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: "Data tidak valid", details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: "Gagal menyimpan analytics" },
      { status: 500 }
    );
  }
}
