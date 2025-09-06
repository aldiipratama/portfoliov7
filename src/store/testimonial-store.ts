import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ITestimonialsData } from "@/types/data";

// Interface buat testimonial state
interface TestimonialState {
  // Data testimonials
  testimonials: ITestimonialsData["testimonials"];

  // Loading states buat UI yang smooth
  isLoading: boolean;
  isSubmitting: boolean;

  // Filter states
  showApprovedOnly: boolean;

  // Actions
  setTestimonials: (testimonials: ITestimonialsData["testimonials"]) => void;
  addTestimonial: (testimonial: ITestimonialsData["testimonials"][0]) => void;
  setLoading: (loading: boolean) => void;
  setSubmitting: (submitting: boolean) => void;
  toggleApprovedFilter: () => void;

  // Utility actions
  getApprovedTestimonials: () => ITestimonialsData["testimonials"];
  getTestimonialCount: () => number;
  clearTestimonials: () => void;
}

// Store buat manage testimonials dengan persistence
export const useTestimonialStore = create<TestimonialState>()(
  persist(
    (set, get) => ({
      // Initial state
      testimonials: [],
      isLoading: false,
      isSubmitting: false,
      showApprovedOnly: true,

      // Actions
      setTestimonials: (testimonials) => {
        set({ testimonials });
      },

      addTestimonial: (testimonial) => {
        set({
          testimonials: [...get().testimonials, testimonial],
        });
      },

      setLoading: (loading) => {
        set({ isLoading: loading });
      },

      setSubmitting: (submitting) => {
        set({ isSubmitting: submitting });
      },

      toggleApprovedFilter: () => {
        set({ showApprovedOnly: !get().showApprovedOnly });
      },

      // Utility functions
      getApprovedTestimonials: () => {
        // Return semua testimonials karena belum ada field isApproved di type
        return get().testimonials;
      },

      getTestimonialCount: () => {
        return get().testimonials.length;
      },

      clearTestimonials: () => {
        set({ testimonials: [] });
      },
    }),
    {
      name: "testimonial-storage", // key di localStorage
      // Cuma simpen testimonials aja, state loading gak perlu
      partialize: (state) => ({
        testimonials: state.testimonials,
        showApprovedOnly: state.showApprovedOnly,
      }),
    }
  )
);

// Store buat global UI state - ini opsional tapi berguna
interface UIState {
  // Theme dan preferences
  isDarkMode: boolean;
  sidebarOpen: boolean;

  // Loading states global
  isPageLoading: boolean;

  // Notification system
  notifications: Array<{
    id: string;
    type: "success" | "error" | "warning" | "info";
    message: string;
    timestamp: number;
  }>;

  // Actions
  toggleDarkMode: () => void;
  toggleSidebar: () => void;
  setPageLoading: (loading: boolean) => void;
  addNotification: (
    notification: Omit<UIState["notifications"][0], "id" | "timestamp">
  ) => void;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;
}

export const useUIStore = create<UIState>()(
  persist(
    (set, get) => ({
      // Initial state
      isDarkMode: false,
      sidebarOpen: false,
      isPageLoading: false,
      notifications: [],

      // Actions
      toggleDarkMode: () => {
        set({ isDarkMode: !get().isDarkMode });
      },

      toggleSidebar: () => {
        set({ sidebarOpen: !get().sidebarOpen });
      },

      setPageLoading: (loading) => {
        set({ isPageLoading: loading });
      },

      addNotification: (notification) => {
        const newNotification = {
          ...notification,
          id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
          timestamp: Date.now(),
        };

        set({
          notifications: [...get().notifications, newNotification],
        });

        // Auto remove setelah 5 detik
        setTimeout(() => {
          get().removeNotification(newNotification.id);
        }, 5000);
      },

      removeNotification: (id) => {
        set({
          notifications: get().notifications.filter((n) => n.id !== id),
        });
      },

      clearNotifications: () => {
        set({ notifications: [] });
      },
    }),
    {
      name: "ui-storage",
      partialize: (state) => ({
        isDarkMode: state.isDarkMode,
        sidebarOpen: state.sidebarOpen,
      }),
    }
  )
);
