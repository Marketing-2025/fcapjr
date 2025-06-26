import CasesSection from "../caseSection/CasesSection";
import { Box, Typography } from "@mui/material";

function CasesPage() {
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
            CASES DE SUCESSO
          </Typography>
          <Typography variant="body1" align="center">
            Conheça nossos casos de sucesso e como ajudamos nossos clientes.
          </Typography>
        </div>
      </Box>
      <CasesSection />
    </div>
  );
}

export default CasesPage;
