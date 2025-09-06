// Central export file buat semua services
// Bikin import jadi lebih clean: import { TestimonialService, AnalyticsService } from '@/services'

export { TestimonialService } from "./testimonial-service";
export { AnalyticsService } from "./analytics-service";
export { GitHubService } from "./github-service";

// Default exports buat yang suka import default
export { default as TestimonialServiceDefault } from "./testimonial-service";
export { default as AnalyticsServiceDefault } from "./analytics-service";
export { default as GitHubServiceDefault } from "./github-service";
