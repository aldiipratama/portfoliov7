import { ITestimonialsData } from "@/types/data";
import { useChatStore } from "@/store/chat-store";
import { useTestimonialStore } from "@/store/testimonial-store";
import { TestimonialService } from "@/services";
import { useChat } from "@ai-sdk/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { EmptyTestimonialState } from "../empty-testimonial-state";
import { TestimonialForm } from "../testimonial-form";
import { TextEffect } from "../ui/text-effect";
import { TestimonialCard } from "./testimonial-card";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsCard = ({ data }: { data: ITestimonialsData }) => {
  const [showCard, setShowCard] = useState<boolean>(false);
  const [showClosing, setShowClosing] = useState<boolean>(false);

  // i18n translations - buat multi bahasa
  const t = useTranslations("etc.testimonials");

  // Store management - pake Zustand biar state management lebih clean
  const { chat } = useChatStore();
  const { testimonials, setTestimonials, addTestimonial, setSubmitting } =
    useTestimonialStore();

  const { sendMessage } = useChat({ chat });

  // Effect buat trigger animasi kalau ada opening text
  useEffect(() => {
    if (data.opening) {
      // Kalau ada opening text, biar TextEffect yang handle timing
      return;
    }
    // Kalau gak ada opening text, langsung show card
    setShowCard(true);
  }, [data.opening]);

  // Effect buat update testimonials pas data berubah
  useEffect(() => {
    setTestimonials(data.testimonials || []);
  }, [data.testimonials, setTestimonials]);

  const handleSubmit = async (values: ITestimonialsData["testimonials"][0]) => {
    // Set loading state buat UI feedback
    setSubmitting(true);

    try {
      // Validasi dulu sebelum kirim - better safe than sorry
      const validation = TestimonialService.validateTestimonial(values);
      if (!validation.isValid) {
        validation.errors.forEach((error) => toast.error(error));
        return;
      }

      // Kirim ke server pake service layer
      const result = await TestimonialService.createTestimonial(values);

      if (result.success) {
        // Tambahin ke local state buat tampilan langsung
        addTestimonial({
          ...values,
          author_avatar: "", // Default empty avatar
        });

        // Kirim pesan terima kasih lewat AI SDK tool
        sendMessage({
          parts: [
            {
              type: "text",
              text: `Saya baru saja mengirimkan testimonial sebagai ${
                values.author_name
              }${values.author_position ? ` (${values.author_position}` : ""}${
                values.author_company
                  ? ` di ${values.author_company})`
                  : values.author_position
                  ? ")"
                  : ""
              }. Rating: ${values.author_rating}/5. Testimonial: "${
                values.author_testimonial
              }". ${
                result.isFirstTime
                  ? "Ini adalah testimonial pertama saya!"
                  : "Saya sudah pernah memberikan testimonial sebelumnya."
              }`,
            },
          ],
        });

        // Show success toast dengan message yang appropriate
        toast.success(
          result.isFirstTime
            ? t("messages.firstTestimonialSuccess")
            : t("messages.success")
        );
      } else {
        toast.error(result.error || t("messages.error"));
        console.error("Error submitting testimonial:", result.error);
      }
    } catch (error: unknown) {
      const errorObj = error as { message?: string };
      console.error("Error submitting testimonial:", error);
      toast.error(errorObj.message || t("messages.networkError"));
    } finally {
      // Reset loading state
      setSubmitting(false);
    }
  };

  return (
    <>
      {data.opening && (
        <TextEffect
          className="text-sm"
          per="word"
          preset="fade"
          as="p"
          onAnimationComplete={() => {
            setShowCard(true);
          }}
        >
          {data.opening}
        </TextEffect>
      )}

      <AnimatePresence mode="wait">
        {(showCard || !data.opening) && (
          <div className="w-full space-y-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="border-y-2 [.border-y-2]:py-4 [.border-y-2]:my-2"
              onAnimationComplete={() => setShowClosing(true)}
            >
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-between mb-4"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">💬</span>
                    <h3 className="font-semibold text-lg">Testimonials</h3>
                  </div>

                  {/* Always show add testimonial button */}
                  <TestimonialForm
                    onSubmit={handleSubmit}
                    triggerButtonText={t("display.writeTestimonial")}
                    triggerButtonIcon="✍️"
                  />
                </motion.div>

                <div className="grid gap-4">
                  {testimonials && testimonials.length > 0 ? (
                    <Carousel className="w-full">
                      <CarouselContent className="-ml-2 md:-ml-4">
                        {testimonials.map((testimonial, index) => (
                          <CarouselItem key={index} className="pl-2 md:pl-4">
                            <Card className="h-full">
                              <CardContent className="p-4 h-full flex flex-col">
                                <TestimonialCard
                                  testimonial={testimonial}
                                  index={index}
                                  visibleIndex={0} // Show all immediately in carousel
                                  onAnimationComplete={() => {}} // No animation sequencing needed
                                />
                              </CardContent>
                            </Card>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      {testimonials.length > 1 && (
                        <>
                          <CarouselPrevious className="hidden md:flex" />
                          <CarouselNext className="hidden md:flex" />
                        </>
                      )}
                    </Carousel>
                  ) : (
                    <EmptyTestimonialState onSubmit={handleSubmit} />
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {data.closing && showClosing && (
        <TextEffect className="text-sm mt-4" per="word" preset="fade" as="p">
          {data.closing}
        </TextEffect>
      )}
    </>
  );
};

export default TestimonialsCard;
