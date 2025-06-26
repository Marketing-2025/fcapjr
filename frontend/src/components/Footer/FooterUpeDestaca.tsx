import type React from "react";
import { Typography, Box, Grid, Container, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import UpeDestaca from "../../assets/imagens/upeDestaca2025.png";
import { useNavigate } from "react-router-dom"; // Adicione esta linha

const FooterUpeDestaca: React.FC = () => {
  const navigate = useNavigate(); // Hook do React Router

  // Função para navegar até o formulário do upe destaca
  const scrollToEventForm = () => {
    navigate("/upe-destaca#form-contato-eventPage");
  };

  return (
    <footer className="py-16 px-4 bg-[#1a0e5b] text-white">
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item size={6} className="text-center md:text-left">
            <img
              src={UpeDestaca}
              alt="UPE DESTACA 2025"
              className="mx-auto md:mx-0 mb-6"
              style={{
                maxWidth: "25vw", // Define o tamanho máximo da largura
                height: "auto", // Mantém a proporção da imagem
                marginLeft: "1rem", // Adiciona uma margem à esquerda
              }}
            />
          </Grid>

          <Grid item size={6}>
            <Box className="space-y-6">
              <Typography variant="h5" className="font-bold">
                DESCUBRA TALENTOS EXTRAORDINÁRIOS
              </Typography>
              <Typography variant="body1">
                Participe da nossa Feira de Talentos e conecte sua empresa a
                profissionais qualificados, prontos para fazer a diferença.
              </Typography>
              <Button
                variant="contained"
                className="bg-white text-[#1a0e5b] hover:bg-gray-100"
                onClick={scrollToEventForm} // Adicione o onClick aqui
              >
                INSCREVA SUA EMPRESA
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Box className="my-12 border-t border-gray-700" />

        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="font-bold mb-4">
              INFORMAÇÕES DE CONTATO
            </Typography>
            <Box component="address" className="not-italic space-y-4">
              <Box className="flex items-start">
                <LocationOnIcon
                  className="mr-2 mt-1 flex-shrink-0"
                  fontSize="small"
                />
                <Typography>
                  Av. Sport Clube do Recife, 252 - Madalena, Recife - PE,
                  50750-500
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box className="flex items-start">
              <AccessTimeIcon
                className="mr-2 mt-1 flex-shrink-0"
                fontSize="small"
              />
              <Typography>
                Turnos: Manhã e Noite
                <br />
                10 e 11 de junho
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box className="flex flex-col md:items-start">
              <Typography>@upedestaca</Typography>
              <Typography>(81) 9670-7045</Typography>
              <Typography>upedestaca@gmail.com</Typography>
            </Box>
          </Grid>
        </Grid>

        <Typography
          variant="caption"
          className="block mt-12 text-center text-gray-400"
          sx={{
            marginTop: "2rem",
          }}
        >
          FCAP JR. CONSULTORIA © 2025 - TODOS OS DIREITOS RESERVADOS
        </Typography>
      </Container>
    </footer>
  );
};

export default FooterUpeDestaca;
