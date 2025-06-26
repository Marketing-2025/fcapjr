import type React from "react";
import { Container, Typography, Box } from "@mui/material";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../testimonialSection/data/testimonial";

const TestimonialsSection: React.FC = () => {
  return (
    <Container maxWidth="lg" className="py-16 relative overflow-hidden">
      <Typography
        variant="h3"
        component="h2"
        align="center"
        className="text-[#0a0057] font-bold relative z-10"
      >
        DEPOIMENTO DE ALGUNS PARCEIROS
      </Typography>

      <Box className="relative z-0 mt-30 md:mt-20">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            index={index}
          />
        ))}
      </Box>
    </Container>
  );
};

export default TestimonialsSection;
