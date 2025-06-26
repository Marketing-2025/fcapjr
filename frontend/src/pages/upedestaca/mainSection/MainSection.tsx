import type React from "react";
import TestimonialsSection from "../testimonialSection/TestimonialSection";
import EmployerBrandingSection from "../brandingSection/EmployerBrandingSection";

const MainSection: React.FC = () => {
  return (
    <div className="w-full bg-[#FAFAFA]">
      <TestimonialsSection />
      <EmployerBrandingSection />
    </div>
  );
};

export default MainSection;
