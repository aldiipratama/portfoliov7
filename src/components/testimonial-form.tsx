"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { ITestimonialsData } from "@/types/data";
import { testimonialsSchema } from "@/tools/schema";
import { useTranslations } from "next-intl";
import { useTestimonialStore } from "@/store/testimonial-store";
import { Loader2 } from "lucide-react";

// Extract testimonial item schema dari existing testimonials schema
const testimonialItemSchema = testimonialsSchema.shape.testimonials.element;

// Tambahin validasi buat form requirements
const testimonialFormSchema = testimonialItemSchema.extend({
  author_name: z.string().min(2, "Nama minimal 2 karakter"),
  author_testimonial: z.string().min(10, "Testimonial minimal 10 karakter"),
});

type TestimonialFormValues = z.infer<typeof testimonialFormSchema>;

interface TestimonialFormProps {
  onSubmit: (values: ITestimonialsData["testimonials"][0]) => void;
  triggerButtonText: string;
  triggerButtonIcon: string;
  triggerButtonVariant?: "default" | "outline";
  triggerButtonSize?: "default" | "sm" | "lg";
  triggerButtonClassName?: string;
}

export const TestimonialForm = ({
  onSubmit,
  triggerButtonText,
  triggerButtonIcon,
  triggerButtonVariant = "outline",
  triggerButtonSize = "sm",
  triggerButtonClassName = "",
}: TestimonialFormProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const t = useTranslations("etc.testimonials");

  // Ambil loading state dari store buat disabled button pas submit
  const { isSubmitting } = useTestimonialStore();

  // Bikin dynamic schema dengan translations
  const createTestimonialFormSchema = () => {
    return testimonialItemSchema.extend({
      author_name: z.string().min(2, t("messages.validation.nameMinLength")),
      author_testimonial: z
        .string()
        .min(10, t("messages.validation.testimonialMinLength")),
    });
  };

  // Form setup
  const form = useForm<TestimonialFormValues>({
    resolver: zodResolver(createTestimonialFormSchema()),
    defaultValues: {
      author_name: "",
      author_testimonial: "",
      author_position: "",
      author_company: "",
      author_instragram: "",
      author_linkedin: "",
      author_github: "",
      author_website: "",
      author_avatar: "",
      author_rating: 5,
    },
  });

  // Handle form submission
  const handleSubmit = (values: TestimonialFormValues) => {
    onSubmit(values);
    form.reset();
    setIsDialogOpen(false);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button
          variant={triggerButtonVariant}
          size={triggerButtonSize}
          className={`gap-2 ${triggerButtonClassName}`}
        >
          <span>{triggerButtonIcon}</span>
          {triggerButtonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <span>💌</span>
            {t("form.dialogTitle")}
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="author_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("form.name")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("form.namePlaceholder")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="author_company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("form.company")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("form.companyPlaceholder")}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Nama perusahaan tempat Anda bekerja (tidak wajib diisi)
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="author_position"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("form.position")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("form.positionPlaceholder")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="author_rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("form.rating")}</FormLabel>
                  <FormControl>
                    <Select
                      value={field.value.toString()}
                      onValueChange={(value) => field.onChange(parseInt(value))}
                    >
                      <SelectTrigger>
                        <SelectValue
                          placeholder={t("form.ratingPlaceholder")}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">
                          ⭐⭐⭐⭐⭐ (5 - Sangat Baik)
                        </SelectItem>
                        <SelectItem value="4">⭐⭐⭐⭐ (4 - Baik)</SelectItem>
                        <SelectItem value="3">⭐⭐⭐ (3 - Cukup)</SelectItem>
                        <SelectItem value="2">⭐⭐ (2 - Kurang)</SelectItem>
                        <SelectItem value="1">
                          ⭐ (1 - Sangat Kurang)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>
                    Berikan rating untuk kualitas pekerjaan atau kolaborasi
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="author_testimonial"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("form.testimonial")}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={t("form.testimonialPlaceholder")}
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
                className="flex-1"
                disabled={isSubmitting} // Disabled juga pas lagi submit
              >
                {t("form.cancelButton")}
              </Button>
              <Button
                type="submit"
                className="flex-1"
                disabled={form.formState.isSubmitting || isSubmitting}
              >
                {/* Show loading icon pas submit biar lebih kece */}
                {(form.formState.isSubmitting || isSubmitting) && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                {form.formState.isSubmitting || isSubmitting
                  ? t("form.loadingButton")
                  : t("form.submitButton")}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
