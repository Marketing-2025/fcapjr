import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container, Typography, Grid } from "@mui/material";
import Hero from "../heroSection/HeroSection";
import ServiceCategories from "../serviceCategories/ServiceCategories";
import BusinessTab6 from "../businessChallSection/Business6";
import ContactForm from "../contactForm/ContactForm";

// Criando um tema personalizado para o Material UI
const theme = createTheme({
  palette: {
    primary: {
      main: "#0e5288",
    },
    secondary: {
      main: "#253c59",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
  },
});

function Connection() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#f5f5f0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* <Header /> */}
        <Box
          sx={{
            py: 8,
            background: "#f5f5f0",
            position: "relative",
          }}
        >
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              component="h2"
              sx={{
                color: "#0e5288",
                textAlign: "center",
                fontWeight: "bold",
                mb: 6,
              }}
            >
              SE HOJE, VOCÊ SE VÊ DIANTE DE:
            </Typography>
            <Grid container spacing={4}>
              <div className="m-auto w-[100%]">
                <BusinessTab6 />
              </div>
              {/* <Grid item xs={12} md={6}>
                <ContactForm />
              </Grid> */}
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Connection;
