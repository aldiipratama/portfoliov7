import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

// Schema for testimonial creation
const createTestimonialSchema = z.object({
  authorName: z.string().min(2, "Nama minimal 2 karakter"),
  authorTestimonial: z.string().min(10, "Testimonial minimal 10 karakter"),
  authorPosition: z.string().optional(),
  authorCompany: z.string().optional(),
  authorRating: z.number().min(1).max(5),
  authorAvatar: z.string().optional(),
  authorInstagram: z.string().optional(),
  authorLinkedin: z.string().optional(),
  authorGithub: z.string().optional(),
  authorWebsite: z.string().optional(),
});

// GET: Retrieve testimonials
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const approved = searchParams.get("approved");
    const limit = searchParams.get("limit");

    const testimonials = await prisma.testimonial.findMany({
      where: approved === "true" ? { isApproved: true } : undefined,
      orderBy: { createdAt: "desc" },
      take: limit ? parseInt(limit) : undefined,
    });

    return NextResponse.json({ success: true, data: testimonials });
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return NextResponse.json(
      { success: false, error: "Gagal mengambil testimonial" },
      { status: 500 }
    );
  }
}

// POST: Create new testimonial
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = createTestimonialSchema.parse(body);

    // Check if this is the first testimonial ever received
    const existingTestimonialsCount = await prisma.testimonial.count();
    const isFirstTime = existingTestimonialsCount === 0;

    const testimonial = await prisma.testimonial.create({
      data: {
        authorName: validatedData.authorName,
        authorTestimonial: validatedData.authorTestimonial,
        authorPosition: validatedData.authorPosition,
        authorCompany: validatedData.authorCompany,
        authorRating: validatedData.authorRating,
        authorAvatar: validatedData.authorAvatar,
        authorInstagram: validatedData.authorInstagram,
        authorLinkedin: validatedData.authorLinkedin,
        authorGithub: validatedData.authorGithub,
        authorWebsite: validatedData.authorWebsite,
        isApproved: false, // Default to false for moderation
      },
    });

    // Log analytics
    await prisma.analytics.create({
      data: {
        eventType: "testimonial_submit",
        eventData: {
          testimonialId: testimonial.id,
          rating: testimonial.authorRating,
          hasCompany: !!testimonial.authorCompany,
          hasPosition: !!testimonial.authorPosition,
        },
        userAgent: request.headers.get("user-agent"),
        ipAddress:
          request.headers.get("x-forwarded-for") ||
          request.headers.get("x-real-ip") ||
          "unknown",
      },
    });

    return NextResponse.json({
      success: true,
      data: testimonial,
      isFirstTime: isFirstTime,
      message: isFirstTime
        ? "Selamat! Ini adalah testimonial pertama yang diterima!"
        : "Testimonial berhasil dikirim dan sedang menunggu persetujuan",
    });
  } catch (error) {
    console.error("Error creating testimonial:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: "Data tidak valid", details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: "Gagal menyimpan testimonial" },
      { status: 500 }
    );
  }
}
