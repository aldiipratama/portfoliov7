import { api } from "@/lib/api-client";

// Response types buat analytics API
interface AnalyticsApiResponse {
  success: boolean;
  data: unknown;
  error?: string;
}

interface AnalyticsEvent {
  eventType: string;
  eventData?: Record<string, unknown>;
  userAgent?: string;
  ipAddress?: string;
}

// Service buat handle analytics API calls
export class AnalyticsService {
  private static readonly ENDPOINT = "/api/analytics";

  /**
   * Ambil data analytics dengan filter
   * @param options - Filter options
   */
  static async getAnalytics(options?: {
    eventType?: string;
    limit?: number;
    days?: number;
  }): Promise<AnalyticsApiResponse> {
    try {
      const params = new URLSearchParams();

      if (options?.eventType) {
        params.append("eventType", options.eventType);
      }

      if (options?.limit) {
        params.append("limit", options.limit.toString());
      }

      if (options?.days) {
        params.append("days", options.days.toString());
      }

      const response = await api.get<AnalyticsApiResponse>(
        `${this.ENDPOINT}${params.toString() ? `?${params.toString()}` : ""}`
      );

      return response.data;
    } catch (error: unknown) {
      const apiError = error as { message?: string };
      console.error("❌ Error fetching analytics:", error);
      throw new Error(apiError.message || "Gagal ngambil data analytics");
    }
  }

  /**
   * Track event baru
   * @param event - Data event yang mau di-track
   */
  static async trackEvent(
    event: AnalyticsEvent
  ): Promise<AnalyticsApiResponse> {
    try {
      const response = await api.post<AnalyticsApiResponse>(
        this.ENDPOINT,
        event
      );

      return response.data;
    } catch (error: unknown) {
      const apiError = error as { message?: string };
      console.error("❌ Error tracking event:", error);
      throw new Error(apiError.message || "Gagal track event nih");
    }
  }

  /**
   * Helper methods buat track specific events
   */
  static async trackPageView(page: string) {
    return this.trackEvent({
      eventType: "page_view",
      eventData: { page },
    });
  }

  static async trackButtonClick(buttonId: string, context?: string) {
    return this.trackEvent({
      eventType: "button_click",
      eventData: { buttonId, context },
    });
  }

  static async trackUserInteraction(
    interactionType: string,
    details?: Record<string, unknown>
  ) {
    return this.trackEvent({
      eventType: "user_interaction",
      eventData: { interactionType, ...details },
    });
  }
}

export default AnalyticsService;
