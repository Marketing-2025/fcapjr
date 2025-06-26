import type React from "react";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  Box,
  Container,
} from "@mui/material";
import { Star as StarIcon } from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import TeamSection from "../team/TeamSection";
import ClientsSection from "../clientSection/ClientSection";
import { TestimonialCarousel } from "../testimonialSection/TestimonialCarrousel";
import SuccessCases from "../../sucess_cases/sucessCases/SucessCases";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1964cc",
    },
    secondary: {
      main: "#0f3c7a",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h3: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

function Connection3() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: "100vh", backgroundColor: "#f5f5f0" }}>
        <CssBaseline />
        <TeamSection />
        <ClientsSection />
        <TestimonialCarousel />
        <Container maxWidth="lg" className="py-16">
          <SuccessCases />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

// Component for Team Cards
// function TeamCard({
//   icon,
//   title,
//   description,
//   highlight = false,
// }: {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   highlight?: boolean;
// }) {
//   return (
//     <Grid item xs={12} md={3}>
//       <Box
//         className={`p-4 flex flex-col items-center text-center ${
//           highlight ? "border-2 border-blue-700 shadow-lg" : ""
//         }`}
//       >
//         <Box className="bg-gray-200 p-4 mb-4 rounded-md">{icon}</Box>
//         <Typography variant="h6" className="font-bold mb-2">
//           {title}
//         </Typography>
//         <Typography className="text-gray-700">{description}</Typography>
//       </Box>
//     </Grid>
//   );
// }

// Component for Client Logos
// function ClientLogo({ src, alt }: { src: string; alt: string }) {
//   return (
//     <Grid item xs={6} md={2.4}>
//       <Box className="bg-white shadow-sm p-4 flex items-center justify-center h-24">
//         <img src={src || "/placeholder.svg"} alt={alt} className="max-h-full" />
//       </Box>
//     </Grid>
//   );
// }

export default Connection3;
