import ResourcesSection from "../resource/ResourcesSection";
import { Box, Typography } from "@mui/material";

function ContentPage() {
  return (
    <div className="min-h-screen">
      <Box sx={{ py: 8, backgroundColor: "#0a4c8a", color: "white" }}>
        <div className="container mx-auto px-4">
          <Typography
            variant="h3"
            component="h1"
            align="center"
            className="mb-4"
          >
            CONTEÚDOS
          </Typography>
          <Typography variant="body1" align="center">
            Explore nossos materiais ricos e conteúdos exclusivos.
          </Typography>
        </div>
      </Box>
      <ResourcesSection />
    </div>
  );
}

export default ContentPage;
