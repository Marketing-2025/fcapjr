import NossaHistoria from "../nossaHistoria/NossaHistoria";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  typography: {
    fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  palette: {
    primary: {
      main: "#0000A0",
    },
    secondary: {
      main: "#0047AB",
    },
    background: {
      default: "#FAFAFA",
    },
  },
});

function Connection2() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NossaHistoria />
    </ThemeProvider>
  );
}

export default Connection2;
