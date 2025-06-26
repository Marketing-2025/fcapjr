import "./App.css";
import { theme } from "./hooks/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import FooterUpeDestaca from "./components/Footer/FooterUpeDestaca";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import RDScriptLoader from "../src/RdsScriptLoader.tsx";
import { ScrollToTop } from "./components/ScrollToTop";

const queryClient = new QueryClient();

function App() {
  const renderFooter = () => {
    if (location.pathname.startsWith("/upe-destaca")) {
      return <FooterUpeDestaca />;
    }
    return <Footer />;
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <RDScriptLoader /> Added RDScriptLoader component */}
      <QueryClientProvider client={queryClient}>
        <ScrollToTop />
        <Toaster
          position="top-center"
          containerStyle={{ height: "300px" }}
          toastOptions={{ style: { fontSize: "20px" } }}
        />
        <Navbar />
        <main className="min-h-screen mt-14 bg-slate-50">
          <Outlet />
        </main>
        {renderFooter()}
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
