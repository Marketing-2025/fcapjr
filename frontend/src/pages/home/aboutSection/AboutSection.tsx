import { Box, Container, Typography, Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Fecap2 from "../../../assets/logos/fecap2.png";
import UPE from "../../../assets/logos/upe.png";
import Fecap from "../../../assets/logos/fecapAzul.png";
import fcapGroup from "../../../assets/imagens/fcapGrupo.png";

const AboutSection = () => {
  return (
    <Box className="m-auto py-16">
      <Container maxWidth="lg">
        <div className="flex flex-col items-center relative gap-16 w-[100%] m-auto justify-center md:flex-row md:items-start">
          <Box className="mt-auto w-[90vw] z-40 absolute bottom-0 mx-auto max-w-[2160px] md:-bottom-20 lg:-bottom-40 xl:-bottom-70">
            <img
              src={fcapGroup}
              alt="Equipe FCAP Jr"
              style={{
                width: "100%", // Ajuste a largura para 80% do contêiner
                height: "auto", // Mantém a proporção da imagem
              }}
            />
          </Box>
          <div className="relative mt-8">
            <Typography
              variant="subtitle1"
              className="text-[#005396] font-medium mb-4"
            >
              SOBRE NÓS
            </Typography>

            <Typography
              sx={{
                fontSize: "3.0em",
                fontWeight: "bold",
                lineHeight: "1.2em",
              }}
              className="text-[#1D2E5E] mb-6"
            >
              Pensamos no
              <br />
              futuro e<br />
              trabalhamos
              <br />
              no presente
            </Typography>

            <Box
              className="
    flex flex-row items-center space-x-4
    mt-10
    justify-center
    left-1/2
    -translate-x-1/2
    absolute
    z-10
    md:relative md:bottom-0 md:mt-10 md:left-auto md:translate-x-0
    bottom-[-2.5rem]
  "
            >
              <img src={Fecap} alt="FCAP Logo" className="h-8" />
              <img src={Fecap2} alt="FCAP Logo" className="h-8" />
              <img src={UPE} alt="UPE Logo" className="h-8" />
            </Box>
          </div>

          <Box className="w-[90%] bg-linear-to-b from-[#006EAD]/70 to-[#9EE2FE]/70 rounded-sm h-[60vh] relative flex flex-col items-end justify-start py-24 px-16 md:w-[50%] md:h-full">
            <Typography
              sx={{ fontSize: { xs: "1em", md: "1.8em" } }}
              className="text-white"
            >
              Nossos jovens profissionais, com paixão pelo que fazem, sabem que
              o crescimento de cada cliente é também a construção de sua própria
              carreira.
            </Typography>

            <Box className="mt-30 md:mt-16 md:mb-14">
              <Button
                sx={{ color: "white", fontWeight: 100, fontSize: "1.5em" }}
                endIcon={<ArrowRightAltIcon />}
                onClick={() => {
                  window.location.href = "/sobre-nos";
                }}
                className="hover:bg-transparent"
              >
                SAIBA MAIS
              </Button>
            </Box>
          </Box>
        </div>
      </Container>
    </Box>
  );
};

export default AboutSection;
