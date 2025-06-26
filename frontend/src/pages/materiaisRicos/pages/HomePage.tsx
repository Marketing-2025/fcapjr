import HeroSection from "../heroSection/HeroSection";
import CategoryNav from "../category/CategoryNav";
import ResourcesSection from "../resource/ResourcesSection";
import SuccessCases from "../../sucess_cases/sucessCases/SucessCases";

function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CategoryNav />
      <ResourcesSection />
      <SuccessCases />
    </div>
  );
}

export default HomePage;
