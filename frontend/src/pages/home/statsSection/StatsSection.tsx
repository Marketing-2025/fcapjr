import { Box, Grid, Typography, Button } from "@mui/material";
import aGenteCresceJunto from "../../../assets/home/aGenteCresceJunto.png";
import { useNavigate } from "react-router-dom";

const stats = [
  { number: "+700", label: "PROJETOS EXECUTADOS" },
  { number: "+40", label: "PRÊMIOS ALCANÇADOS" },
  { number: "9,41", label: "MÉDIA DAS NOTAS DE NPS" },
  { number: "36", label: "ANOS DE ATUAÇÃO" },
];

const StatsSection = () => {
  const navigate = useNavigate();

  const scrollToForm = () => {
    navigate("/#form-contato-home");
  };

  return (
    <Box
      className="mt-[80vw] lg:mt-0 lg:h-[100%] justify-center lg:justify-end"
      sx={{
        display: "flex",
        alignItems: "flex-end", // Centraliza verticalmente
      }}
    >
      <div className="z-40 flex flex-col items-center justify-center absolute top-90 m-auto lg:top-10 lg:items-start lg:left-0 lg:left-[20%]">
        <Box className="w-[100%] h-[100%]">
          <img
            src={aGenteCresceJunto}
            className="w-[100%] mx-auto px-10 max-w-[400px] lg:w-[90%] lg:px-4"
          />
        </Box>

        <Typography
          sx={{ fontSize: "1.2em", my: 4, ml: 3 }}
          className="text-[#024E8B] max-w-sm"
        >
          Há mais de 36 anos impactando a gestão empresarial com qualidade, por
          meio da dedicação e criatividade.
        </Typography>

        <Button
          sx={{ ml: { xs: 0, md: 11 } }}
          variant="contained"
          size="large"
          className="bg-[#1D2E5E] text-white px-6 py-1"
          onClick={scrollToForm}
        >
          Planeje seu projeto
        </Button>
      </div>

      <div className="mx-12 mb-5 p-10 items-end justify-end bg-linear-to-r from-[#005699]/80 from-70% to-white/10 to-120% lg:m-0 lg:w-[80%] lg:justify-start">
        <div className="grid grid-cols-2 gap-8 lg:flex lg:w-[90%] lg:justify-around">
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={0} md={3} key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center", // Centraliza horizontalmente
                  justifyContent: "center", // Centraliza verticalmente
                  textAlign: "center", // Centraliza o texto
                }}
              >
                <Typography
                  className={`font-bold mb-2 ${
                    index === 3 ? "text-[white]" : "text-white"
                  }`}
                  sx={{
                    fontSize: "3rem", // Ajusta o tamanho do número
                    fontWeight: "bold",
                  }}
                >
                  {stat.number}
                </Typography>
                <Typography
                  className={`font-bold text-sm mb-2 ${
                    index === 3 ? "text-[white]" : "text-white"
                  }`}
                  sx={{
                    fontSize: "1rem", // Ajusta o tamanho do texto
                    width: "70%",
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default StatsSection;
