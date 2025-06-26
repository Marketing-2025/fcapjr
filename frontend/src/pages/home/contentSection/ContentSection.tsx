import {
  Card,
  CardContent,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";
import inteligenciaArtificial from "../../../assets/imagens/inteligenciaArtificial.png";
import EcosistemaInovacao from "../../../assets/imagens/EcosistemaInovacao.png";

export default function ContentSection() {
  return (
    <>
      <Container
        maxWidth="lg"
        className="py-12"
        sx={{
          backgroundColor: "linear-gradient(to right, #ffffff, #f0f0f0)", // Adicione a cor de fundo aqui
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          className="font-bold text-[#1D2E5E]"
        >
          NOSSOS CONTEÚDOS
        </Typography>
        <Box className="w-24 h-0.5 bg-[#1a3a7e] mt-6 mb-8"></Box>

        <div className="flex flex-col items-center justify-center md:flex-row gap-10">
          {/* Content 1 - Alinhado à esquerda */}
          <Box sx={{ width: "90%" }}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                margin: "auto",
                height: "450px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                borderRadius: "5px",
              }}
            >
              <Box className="relative h-48 w-full">
                <img
                  src={inteligenciaArtificial}
                  alt="Inteligência Artificial"
                  className="w-full h-full object-cover"
                />
              </Box>
              <CardContent
                sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
              >
                <Typography
                  variant="h6"
                  component="h5"
                  className="font-bold"
                >
                  Inteligência Artificial para Produtividade Empresarial
                </Typography>
                <Typography
                  sx={{ my: 4 }}
                  variant="body1"
                  className="text-gray-700"
                >
                  IA é essencial para automatizar tarefas, aumentar eficiência e
                  focar em estratégias no mercado atual.
                </Typography>
                <Box sx={{ flexGrow: 1 }} />{" "}
                {/* Espaço flexível para empurrar o botão */}
                <Button
                  variant="outlined"
                  color="inherit"
                  className="normal-case"
                  sx={{
                    alignSelf: "flex-end",
                    px: 1,
                    mt: 2,
                    borderColor: "#CBCBCB",
                  }} // Alinha o botão à esquerda
                >
                  Leia agora
                </Button>
              </CardContent>
            </Card>
          </Box>

          {/* Content 2 - Alinhado à direita */}
          <Box sx={{ width: "90%" }}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                margin: "auto", 
                height: "450px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                borderRadius: "5px",
              }}
            >
              <Box className="relative h-48 w-full">
                <img
                  src={EcosistemaInovacao}
                  alt="Ecossistemas de Inovação"
                  className="w-full h-full object-cover"
                />
              </Box>
              <CardContent
                sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
              >
                <Typography variant="h6" component="h6" className="font-bold">
                  Ecossistemas de Inovação: Catalisadores do Sucesso Empresarial
                </Typography>
                <Typography
                  variant="body1"
                  className="text-gray-700"
                >
                  Um ecossistema de inovação é uma rede colaborativa que integra
                  empresas, universidades e atores para desenvolver soluções
                  inovadoras
                </Typography>
                <Box sx={{ flexGrow: 1 }} />{" "}
                {/* Espaço flexível para empurrar o botão */}
                <Button
                  variant="outlined"
                  color="inherit"
                  className="normal-case"
                  sx={{
                    alignSelf: "flex-end",
                    px: 1,
                    mt: 2,
                    borderColor: "#CBCBCB",
                  }} // Alinha o botão à esquerda
                >
                  Leia agora
                </Button>
              </CardContent>
            </Card>
          </Box>
        </div>
      </Container>
    </>
  );
}
