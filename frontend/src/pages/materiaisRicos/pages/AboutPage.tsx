import { Box, Typography } from "@mui/material";

function AboutPage() {
  return (
    <div className="min-h-screen">
      <Box sx={{ py: 8 }}>
        <div className="container mx-auto px-4">
          <Typography
            variant="h3"
            component="h1"
            align="center"
            color="primary"
            className="mb-8"
          >
            Sobre Nós
          </Typography>
          <Typography variant="body1" paragraph>
            Conteúdo da página Sobre Nós...
          </Typography>
        </div>
      </Box>
    </div>
  );
}

export default AboutPage;
