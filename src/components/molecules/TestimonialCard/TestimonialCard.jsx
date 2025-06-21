import React from 'react';
import { Card, CardContent } from '../../ui/card';
import { Text } from '../../atoms/Text/Text';
import { Image } from '../../atoms/Image/Image';

export const TestimonialCard = ({ testimonial, className }) => {
  return (
    <Card className={`${testimonial.bgColor} rounded-2xl sm:rounded-3xl min-h-[380px] sm:min-h-[420px] md:min-h-[426px] border-none shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}>
      <CardContent className="flex flex-col items-center gap-6 sm:gap-8 p-6 sm:p-8 h-full">
        <Text 
          variant="body" 
          className={`flex-1 self-stretch italic ${testimonial.textColor} text-center`}
        >
          "{testimonial.quote}"
        </Text>
        
        <div className="flex flex-col w-full max-w-[285px] items-center gap-3 sm:gap-4">
          <Image
            src={testimonial.image}
            alt={`${testimonial.name} profile picture`}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-[100px] md:h-[100px]"
            rounded
          />
          
          <Text 
            variant="h3" 
            className={`${testimonial.textColor} self-stretch text-center`}
          >
            {testimonial.name}
          </Text>
          
          <Text 
            variant="caption" 
            className={`${testimonial.roleColor} self-stretch text-center`}
          >
            {testimonial.role}
          </Text>
        </div>
      </CardContent>
    </Card>
  );
};