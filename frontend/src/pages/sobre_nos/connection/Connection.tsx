import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import HeroSection from "../heroSection/HeroSection";
import AboutSection from "../aboutSection/AboutSection";
import VideoSection from "../videoSection/VideoSection";
import StakeholdersSection from "../stakeHoldersSection/StakeHoldersSection";
import { theme } from "../connection/Theme";

function Connection() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="min-h-screen overflow-hidden">
        <HeroSection />
        <AboutSection />
        <VideoSection />
        <StakeholdersSection />
      </div>
    </ThemeProvider>
  );
}

export default Connection;
