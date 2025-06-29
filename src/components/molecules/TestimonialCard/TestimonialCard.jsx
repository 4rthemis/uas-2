import React from "react";
import { Card, CardContent } from "../../ui/card";
import { Text } from "../../atoms/Text/Text";
import { Image } from "../../atoms/Image/Image";

export const TestimonialCard = ({ testimonial, className }) => {
  return (
    <Card
      className={`
        ${testimonial.bgColor} 
        rounded-2xl sm:rounded-3xl 
        h-[426px] 
        border-none 
        ${className}
      `}
    >
      <CardContent className="flex flex-col justify-between items-center gap-6 sm:gap-8 p-6 sm:p-8 h-full">
        {/* Quote */}
        <div className="flex-1 w-full overflow-hidden">
          <Text
            variant="body"
            className={`italic ${testimonial.textColor} text-center break-words line-clamp-6`}
          >
            "{testimonial.quote}"
          </Text>
        </div>

        {/* Profile section */}
        <div className="flex flex-col w-full max-w-[285px] items-center gap-3 sm:gap-4">
          <Image
            src={testimonial.image}
            alt={`${testimonial.name} profile picture`}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-[100px] md:h-[100px]"
            rounded
          />

          <Text variant="h3" className={`${testimonial.textColor} text-center`}>
            {testimonial.name}
          </Text>

          <Text
            variant="caption"
            className={`${testimonial.roleColor} text-center break-words leading-snug`}
          >
            {testimonial.role}
          </Text>
        </div>
      </CardContent>
    </Card>
  );
};
