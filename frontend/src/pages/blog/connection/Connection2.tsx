import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";

import Artigos from "../artigos/Artigos";
import MateriaisRicos from "../materialRicos/MateiralRicos";
import SuccessCases from "../../sucess_cases/sucessCases/SucessCases";

// Criando um tema personalizado com as cores da FCAP Jr.
const theme = createTheme({
  palette: {
    primary: {
      main: "#0D47A1", // Azul escuro
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
  },
});

function Connection2() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="min-h-screen bg-[#f5f2e8]">
        <main>
          <Container maxWidth="lg" className="py-16">
            <MateriaisRicos />
            <SuccessCases />
          </Container>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default Connection2;
