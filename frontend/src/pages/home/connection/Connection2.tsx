import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Methodology } from "../methology/Methodology";
import Solution from "../solution/Solution";
import { Container } from "@mui/material";

// Create a theme with primary and secondary colors matching the design
const theme = createTheme({
  palette: {
    primary: {
      main: "#0c4da2",
    },
    secondary: {
      main: "#1a365d",
    },
    background: {
      default: "#eae7dc",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
  },
});

function Connection2() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main className="bg-[#EBECEC] flex min-h-screen flex-col items-center">
        <Methodology />
        <Container maxWidth="lg" className="py-16">
          <Solution />
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default Connection2;
