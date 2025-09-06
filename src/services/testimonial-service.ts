import { api } from "@/lib/api-client";
import { ITestimonialsData } from "@/types/data";

// Response types buat API testimonials
interface TestimonialApiResponse {
  success: boolean;
  data: unknown;
  message?: string;
  isFirstTime?: boolean;
  error?: string;
  details?: unknown;
}

interface CreateTestimonialPayload {
  authorName: string;
  authorTestimonial: string;
  authorPosition?: string;
  authorCompany?: string;
  authorRating: number;
  authorAvatar?: string;
  authorInstagram?: string;
  authorLinkedin?: string;
  authorGithub?: string;
  authorWebsite?: string;
}

// Service class buat handle semua API calls testimonials
export class TestimonialService {
  // Base endpoint
  private static readonly ENDPOINT = "/api/testimonials";

  /**
   * Ambil semua testimonials - bisa filter approved atau engga
   * @param options - Filter options
   */
  static async getTestimonials(options?: {
    approved?: boolean;
    limit?: number;
  }): Promise<TestimonialApiResponse> {
    try {
      const params = new URLSearchParams();

      if (options?.approved !== undefined) {
        params.append("approved", options.approved.toString());
      }

      if (options?.limit) {
        params.append("limit", options.limit.toString());
      }

      const response = await api.get<TestimonialApiResponse>(
        `${this.ENDPOINT}${params.toString() ? `?${params.toString()}` : ""}`
      );

      return response.data;
    } catch (error: unknown) {
      const apiError = error as { message?: string };
      console.error("❌ Error fetching testimonials:", error);
      throw new Error(apiError.message || "Gagal ngambil testimonials nih");
    }
  }

  /**
   * Kirim testimonial baru ke server
   * @param testimonial - Data testimonial
   */
  static async createTestimonial(
    testimonial: ITestimonialsData["testimonials"][0]
  ): Promise<TestimonialApiResponse> {
    try {
      // Transform data sesuai format API
      const payload: CreateTestimonialPayload = {
        authorName: testimonial.author_name,
        authorTestimonial: testimonial.author_testimonial,
        authorPosition: testimonial.author_position,
        authorCompany: testimonial.author_company,
        authorRating: testimonial.author_rating,
        authorAvatar: testimonial.author_avatar,
        authorInstagram: testimonial.author_instragram, // typo di schema asli
        authorLinkedin: testimonial.author_linkedin,
        authorGithub: testimonial.author_github,
        authorWebsite: testimonial.author_website,
      };

      const response = await api.post<TestimonialApiResponse>(
        this.ENDPOINT,
        payload
      );

      return response.data;
    } catch (error: unknown) {
      const apiError = error as {
        message?: string;
        response?: {
          status?: number;
          data?: { error?: string };
        };
      };

      console.error("❌ Error creating testimonial:", error);

      // Handle validation errors specifically
      if (apiError.response?.status === 400) {
        throw new Error(
          apiError.response.data?.error || "Data testimonial gak valid"
        );
      }

      throw new Error(apiError.message || "Gagal kirim testimonial nih");
    }
  }

  /**
   * Helper method buat validasi testimonial sebelum kirim
   * @param testimonial - Data testimonial
   */
  static validateTestimonial(
    testimonial: ITestimonialsData["testimonials"][0]
  ): {
    isValid: boolean;
    errors: string[];
  } {
    const errors: string[] = [];

    if (!testimonial.author_name || testimonial.author_name.length < 2) {
      errors.push("Nama minimal 2 karakter dong");
    }

    if (
      !testimonial.author_testimonial ||
      testimonial.author_testimonial.length < 10
    ) {
      errors.push("Testimonial minimal 10 karakter ya");
    }

    if (testimonial.author_rating < 1 || testimonial.author_rating > 5) {
      errors.push("Rating harus antara 1-5");
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }
}

// Export default buat kemudahan import
export default TestimonialService;
