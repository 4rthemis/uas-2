import React from 'react';
import { Text } from '../../atoms/Text/Text';
import { TestimonialCard } from '../../molecules/TestimonialCard/TestimonialCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '../../ui/carousel';

export const TestimonialsSection = ({ testimonials }) => {
  return (
    <section id="testimonials" className="flex flex-col items-center gap-8 sm:gap-12 md:gap-16 w-full py-8">
      <div className="flex flex-col items-center gap-6 sm:gap-8 max-w-[1200px] w-full px-4 sm:px-8">
        <Text variant="h2" color="primary" align="center">
          Testimonials
        </Text>
        
        <Text variant="body" color="secondary" align="center" className="max-w-[782px] px-4">
          What others say about me
        </Text>
      </div>

      <Carousel className="w-full max-w-[1440px]">
        <CarouselContent className="px-4 sm:px-8">
          {testimonials.map((testimonial) => (
            <CarouselItem
              key={testimonial.id}
              className="basis-full sm:basis-1/1 md:basis-1/2 pl-4"
            >
              <TestimonialCard testimonial={testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};