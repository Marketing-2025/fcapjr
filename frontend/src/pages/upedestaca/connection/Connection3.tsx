import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MainSection from "../mainSection/MainSection";

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: "#0a0057",
    },
    secondary: {
      main: "#1e40af",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h2: {
      fontSize: "3.75rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
    },
  },
});

function Connection3() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="min-h-screen">
        <MainSection />
      </div>
    </ThemeProvider>
  );
}

export default Connection3;
