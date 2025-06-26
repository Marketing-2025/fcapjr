import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MissionVisionSection from "../missionVissionSection/MissionVissionSection";

// Create a theme instance
const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
    },
  },
  palette: {
    primary: {
      main: "#0d6eaa",
    },
    secondary: {
      main: "#a6d9ef",
    },
    background: {
      default: "#ffffff",
    },
  },
});

function Connection2() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <MissionVisionSection />
      </main>
    </ThemeProvider>
  );
}

export default Connection2;
