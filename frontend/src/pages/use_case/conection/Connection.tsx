import { Container } from "@mui/material";

import HeroSection from "../heroSection/HeroSection";
import SearchFilter from "../seactSection/SearchFilter";
import CategoryFilters from "../categoryFilters/CategoryFilters";
import CaseStudies from "../caseStudies/CaseStudies";

function Connection() {
  return (
    <div className="bg-gradient-to-r from-white via-[#006EAD]/18 via-40% pb-1">
      <HeroSection />

      {/* <section className="mb-12">
        <Container>
          <SearchFilter />
        </Container>
      </section>

      <section className="mb-12">
        <Container>
          <CategoryFilters />
        </Container>
      </section> */}

      <section className="mb-20">
        <Container>
          <CaseStudies />
        </Container>
      </section>
    </div>
  );
}

export default Connection;
