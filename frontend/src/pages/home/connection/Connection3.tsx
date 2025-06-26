import { Box, Container } from "@mui/material";
import { ContactForm } from "../contact/ContactSection";
import { HeroSectionContact } from "../contact/ContactHero";
import { PartnersSection } from "../partners/PartnersSection";
import { TestimonialCarousel } from "../testimonial/TestimonialCarousel";

function Connection3() {
  return (
    <Container maxWidth={false} disableGutters>
      <main className="bg-[#EBECEC]">
        <section className="bg-[#EBECEC] flex flex-col m-auto justify-center">
          <Box
            sx={{
              flexDirection: { xs: "column", lg: "row", paddingLeft: "4.5rem" },
            }}
            className="flex items-center justify-center m-auto]"
          >
            <HeroSectionContact />
            <ContactForm />
          </Box>

          <PartnersSection />
          <TestimonialCarousel />
        </section>
      </main>
    </Container>
  );
}

export default Connection3;
