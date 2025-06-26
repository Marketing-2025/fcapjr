import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import BrasilJunior from "../../../assets/logos/BrasilJunior.png";
import Fejepe from "../../../assets/logos/FEJEPE.png";

const StakeholdersSection = () => {
  return (
    <Box className="flex py-16" sx={{ bgcolor: "#ebecec" }}>
      <Container maxWidth="lg" sx={{ marginTop: "-7rem" }}>
        <div className="flex flex-col-reverse items-center gap-10 w-[95%] m-auto lg:flex-row lg:w-[80%]">
          <Typography
            variant="body1"
            className="text-gray-800 leading-relaxed"
            align="justify"
            sx={{
              fontSize: { xs: "1rem", md: "1.2em" },
              lineHeight: "1.8rem",
              mx: 1,
            }}
          >
            Ao combinar o dinamismo e a criatividade dos nossos membros com os
            conhecimentos adquiridos no Movimento Empresa Júnior e a constante
            interação com empresas sêniores, a FCAP JR. é capaz de implementar
            metodologias ágeis e uma visão para o futuro na realidade das
            empresas. Nosso objetivo é oferecer soluções eficazes e
            sustentáveis, garantindo a personalização dos nossos serviços para
            atender às necessidades específicas de cada cliente.
          </Typography>

          <div className="w-[100%] max-w-[500px] m-auto">
            <div className="bg-linear-to-b from-[#9EE2FE]/60 to-[#006EAD]/60 rounded-lg">
              <Box className="space-y-8 p-10">
                <Typography
                  variant="h4"
                  component="h4"
                  fontWeight="bold"
                  align="center"
                  sx={{
                    color: "primary.dark",
                    marginBottom: "2rem",
                  }}
                >
                  STAKEHOLDERS
                </Typography>

                <Box className="flex justify-center">
                  <img
                    src={Fejepe}
                    alt="FEJEPE Logo"
                    className="h-auto max-h-20"
                    style={{ maxWidth: "200px" }}
                  />
                </Box>

                <Box
                  className="pt-8"
                  sx={{ borderTop: 1, borderColor: "primary.light" }}
                >
                  <Box className="flex justify-center">
                    <img
                      src={BrasilJunior}
                      alt="Brasil Júnior Logo"
                      className="h-auto max-h-20"
                      style={{
                        maxWidth: "200px",
                        fontSize: "1.2rem",
                        lineHeight: "1.8rem",
                        marginTop: "2rem",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </div>
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default StakeholdersSection;
