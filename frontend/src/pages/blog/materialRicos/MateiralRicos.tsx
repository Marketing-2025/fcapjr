import { Box, Typography, Container } from "@mui/material";
import materialBg from "../../../assets/imagens/materialBg.png";
import materialBgDesk from "../../../assets/imagens/materialBgDesk.png";

function MateriaisRicos() {
  return (
    <Box className="py-16 max-w-[90%] m-auto">
      <Typography
        variant="h4"
        component="h2"
        class="text-blue-900 text-center text-4xl mb-20"
      >
        MATERIAIS RICOS
      </Typography>

      <Box
        sx={{
          backgroundImage: {
            xs: `URL(${materialBg})`,
            md: `URL(${materialBgDesk})`,
          },
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: { xs: "center", md: "bottom" },
        }}
        className="text-white w-[100%] h-64 m-auto max-w-[800px] md:h-72 py-16 rounded-md"
      >
        <Container maxWidth="lg">
          <Box className="flex flex-col md:flex-row items-center">
            <Box className="md:w-1/3 mb-8 flex justify-center">
              <Box className="relative"></Box>
            </Box>
            <Box className="ml-12 w-2/3 text-center">
              <p className="w-80 md:mt-10 md:text-xl md:w-96">
                Acesse{" "}
                <a href="#" className="underline">
                  aqui
                </a>{" "}
                ebook, planilhas e infográficos que irão contribuir para o
                crescimento da sua empresa
              </p>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default MateriaisRicos;
