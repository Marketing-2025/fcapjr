import EventPage from "../eventSection/EventPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Criando um tema personalizado para o Material UI
const theme = createTheme({
  palette: {
    primary: {
      main: "#1a0e5b",
    },
    secondary: {
      main: "#4f46e5",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
});

function Connection5() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <EventPage />
    </ThemeProvider>
  );
}

export default Connection5;
