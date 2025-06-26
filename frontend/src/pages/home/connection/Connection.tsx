import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../connection/Theme";
import HeroSection from "../heroSection/HeroSection";
import StatsSection from "../statsSection/StatsSection";
import AboutSection from "../aboutSection/AboutSection";
import ClientsSection from "../clientSection/ClientSection";

function Connection() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main className="min-h-screen bg-[#EBECEC] relative">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ClientsSection />
      </main>
    </ThemeProvider>
  );
}

export default Connection;
