import type React from "react";
import { Card, Typography, Grid, Box, Button, Container } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import mapaBrasil from "../../../assets/imagens/mapaBrasil.png";
import fcapGroup from "../../../assets/imagens/fcapjr_grupo.png";

const MissionVisionSection: React.FC = () => {
  return (
    <Box className="bg-[#ebecec] py-12 md:py-16 lg:py-24">
      <Container maxWidth="lg">
        {/* Mission and Vision Cards */}
        <Grid
          container
          spacing={4} // Espaçamento entre os itens
          className="mb-20"
          columns={{ xs: 24, sm: 12, md: 12 }}
        >
          {/* Mission Card */}
          <Grid item size={{ xs: 24, md: 6, sm: 6 }}>
            <Card
              className="from-sky-200 to-sky-400 rounded-lg p-8 text-center h-full"
              sx={{
                height: "70vh", // Garante que o cartão ocupe toda a altura disponível
                width: "100%",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center", // Centraliza verticalmente
                alignItems: "center", // Centraliza horizontalmente
                background: "linear-gradient(to bottom, #a6d9ef, #0d6eaa)", // Gradiente de azul claro para azul escuro
              }}
            >
              <Typography variant="h4" className="text-sky-800 font-bold mb-6">
                MISSÃO
              </Typography>
              <Typography
                variant="body1"
                className="text-center leading-relaxed"
                sx={{
                  fontSize: "1.5rem", // Ajusta o tamanho do texto
                }}
              >
                Ser referência em crescimento sustentável, impulsionando
                projetos de impacto e desenvolvendo nossos membros como
                protagonistas da transformação.
              </Typography>
            </Card>
          </Grid>

          {/* Vision Card */}
          <Grid item size={{ xs: 24, md: 6, sm: 6 }}>
            <Card
              className=" from-sky-200 to-sky-400 rounded-lg p-8 text-center h-full"
              sx={{
                height: "70vh", // Garante que o cartão ocupe toda a altura disponível
                width: "100%", // Garante que o cartão ocupe toda a largura disponível
                margin: "0 auto", // Centraliza o cartão horizontalmente
                display: "flex",
                flexDirection: "column",
                justifyContent: "center", // Centraliza verticalmente
                alignItems: "center", // Centraliza horizontalmente
                background: "linear-gradient(to bottom, #a6d9ef, #0d6eaa)",
              }}
            >
              <Typography variant="h4" className="text-sky-800 font-bold mb-6">
                VISÃO
              </Typography>
              <Typography
                variant="body1"
                className="text-center leading-relaxed"
                sx={{
                  fontSize: "1.5rem", // Ajusta o tamanho do texto
                }}
              >
                Transformar a FCAP JR. Consultoria em um símbolo de excelência
                em estratégias modernas, unindo eficiência operacional e gestão
                de dados para criar impacto real.
              </Typography>
            </Card>
          </Grid>
        </Grid>

        {/* Values Section */}
        <Box className="mb-16">
          <Grid
            container
            spacing={4} // Mantém o espaçamento entre os itens
            alignItems="center"
            justifyContent="center"
          >
            <Grid size={6}>
              <Typography
                variant="h4"
                className="text-sky-800 font-bold"
                sx={{
                  fontSize: { xs: "2rem", sm: "2.2rem", md: "2.8rem" }, // Responsivo
                  marginBottom: "0.5rem",
                  textAlign: { xs: "center", md: "left" }, // Centraliza no mobile
                  marginLeft: { xs: 0, md: "5%" },
                  wordBreak: "break-word",
                }}
              >
                NOSSOS VALORES
              </Typography>
              <Typography
                variant="body1"
                className="text-center mb-8"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.1rem", md: "1.3rem" }, // Responsivo
                  marginBottom: "1rem",
                  textAlign: { xs: "center", md: "left" },
                  marginLeft: { xs: 0, md: "5%" },
                  wordBreak: "break-word",
                }}
              >
                O que nós acreditamos é o que nos faz únicos
              </Typography>
            </Grid>

            {/* Value Cards */}
            {[...Array(5)].map((_, index) => (
              <Grid size={6} key={index}>
                <Box className="mb-6">
                  <Box className="flex items-center mb-4">
                    <Typography
                      variant="h6"
                      className="text-sky-700 font-bold"
                      sx={{ fontSize: "1.1rem" }}
                    >
                      {
                        [
                          "Meta é piso",
                          "Aprender e ensinar",
                          "Eu faço agora",
                          "Desenrola",
                          "Foco no Cliente",
                        ][index]
                      }
                    </Typography>
                    <Box className="h-[1px] bg-sky-700 flex-grow ml-4 mr-2"></Box>
                  </Box>
                  <Card
                    className="border border-sky-700 rounded-lg p-6 shadow-none transition-all duration-300"
                    sx={{
                      height: { xs: 150, md: 150 },
                      minHeight: 150,
                      maxHeight: 150,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#ebecec",
                      cursor: "pointer",
                      transition: "transform 0.3s",
                      "&:hover": {
                        transform: "scale(1.07)", // Expande suavemente ao passar o mouse
                        boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                        zIndex: 2,
                      },
                    }}
                  >
                    <Typography
                      variant="body1"
                      className="text-sky-700 text-center"
                      sx={{ fontSize: { xs: "1rem", md: "1.1rem" } }}
                    >
                      {
                        [
                          "Somos inconformados e sempre queremos mais",
                          "Compartilhamos o nosso conhecimento e sempre buscamos novos",
                          "Não deixamos para depois",
                          "Superamos situações adversas",
                          "Entregamos resultados e não damos desculpas",
                        ][index]
                      }
                    </Typography>
                  </Card>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Number One Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Team Photo */}
          <div className="max-w-[1000px]">
            <img
              src={fcapGroup}
              alt="Equipe FCAP Jr."
              className="w-[100%] rounded-lg align-self-start"
            />
          </div>

          <Box className="flex flex-col justify-center items-center my-8">
            <img
              src={mapaBrasil}
              alt="Mapa do Brasil com destaque para Norte e Nordeste"
              className="w-[100%] max-w-[250px] rounded-lg align-self-start"
              style={{
                display: "flex", // Define o Box como flex container
                justifyContent: "center", // Centraliza horizontalmente
                alignItems: "center", // Centraliza verticalmente
              }}
            />

            {/* Number One Info */}
            <Grid item xs={12} md={6}>
              <Box className="flex flex-col items-center">
                <Box className="flex items-end">
                  <p className="text-transparent text-9xl font-extrabold leading-none bg-clip-text bg-gradient-to-b from-[#005396] to-[#9EE2FE]">
                    1
                  </p>
                  <span className="text-transparent text-7xl pb-10 font-bold bg-clip-text bg-gradient-to-b from-[#005396] to-[#9EE2FE] to-40%">
                    ª
                  </span>
                  <Box className="ml-2 mb-4">
                    <Typography
                      variant="h6"
                      className="text-[#005396] w-[100%] max-w-[370px] font-bold leading-tight"
                      sx={{ fontSize: { sm: "1rem", lg: "1.2rem" } }}
                    >
                      Empresa Júnior fundada no Norte/Nordeste e a 2ª fundada no
                      Brasil
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Box>
        </div>
      </Container>
    </Box>
  );
};

export default MissionVisionSection;
