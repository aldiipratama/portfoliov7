"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { TextEffect } from "../ui/text-effect";

interface TestimonialData {
  author_name: string;
  author_testimonial: string;
  author_position?: string;
  author_company?: string;
  author_rating?: number;
  author_avatar?: string;
}

interface TestimonialCardProps {
  testimonial: TestimonialData;
  index: number;
  visibleIndex: number;
  onAnimationComplete: () => void;
}

export const TestimonialCard = ({
  testimonial,
  index,
  visibleIndex,
  onAnimationComplete,
}: TestimonialCardProps) => {
  // Render rating stars
  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: index * 0.1 }}
        className="text-sm text-yellow-500"
      >
        ⭐
      </motion.span>
    ));
  };

  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: -20 }}
      animate={{
        opacity: index <= visibleIndex ? 1 : 0,
        x: index <= visibleIndex ? 0 : -20,
      }}
      transition={{
        duration: 0.3,
        delay: 0.1,
      }}
    >
      {index <= visibleIndex && (
        <Card className="hover:bg-accent/20 transition-colors">
          <CardContent className="p-4 space-y-4">
            {/* Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.2,
              }}
              className="text-sm leading-relaxed text-muted-foreground relative"
            >
              <span className="text-2xl text-muted-foreground absolute -top-2 -left-1">
                &ldquo;
              </span>
              <div className="pl-4">
                <TextEffect
                  per="word"
                  preset="fade"
                  as="p"
                  onAnimationComplete={onAnimationComplete}
                >
                  {testimonial.author_testimonial}
                </TextEffect>
              </div>
              <span className="text-2xl text-muted-foreground float-right -mt-2">
                &rdquo;
              </span>
            </motion.div>

            {/* Author Info */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.4,
              }}
              className="flex items-center gap-3 pt-2 border-t"
            >
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src={testimonial.author_avatar}
                  alt={testimonial.author_name}
                />
                <AvatarFallback className="text-xs">
                  {getInitials(testimonial.author_name)}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="font-medium text-sm">
                  {testimonial.author_name}
                </div>
                {testimonial.author_position && (
                  <div className="text-xs text-muted-foreground">
                    {testimonial.author_position}
                  </div>
                )}
                {testimonial.author_company && (
                  <Badge variant="secondary" className="text-xs mt-1">
                    {testimonial.author_company}
                  </Badge>
                )}
              </div>

              {/* Rating */}
              {testimonial.author_rating && (
                <div className="flex items-center gap-1">
                  {renderStars(testimonial.author_rating)}
                </div>
              )}
            </motion.div>
          </CardContent>
        </Card>
      )}
    </motion.div>
  );
};
