"use client";

import { motion } from "framer-motion";
import { TestimonialForm } from "./testimonial-form";
import { useTranslations } from "next-intl";

interface TestimonialFormValues {
  author_name: string;
  author_testimonial: string;
  author_position?: string;
  author_company?: string;
  author_rating: number;
}

interface EmptyTestimonialStateProps {
  onSubmit: (values: TestimonialFormValues) => void;
}

export const EmptyTestimonialState = ({
  onSubmit,
}: EmptyTestimonialStateProps) => {
  const t = useTranslations("etc.testimonials.display");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="text-center py-12 space-y-4"
    >
      <div className="space-y-2">
        <span className="text-6xl block">💭</span>
        <h4 className="text-lg font-medium">{t("emptyState")}</h4>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          {t("emptyStateDesc")}
        </p>
      </div>

      <TestimonialForm
        onSubmit={onSubmit}
        triggerButtonText={t("writeFirstTestimonial")}
        triggerButtonIcon="✨"
        triggerButtonVariant="default"
        triggerButtonClassName="mt-4"
      />
    </motion.div>
  );
};
