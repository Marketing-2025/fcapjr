import { Box, Typography, Container, Grid } from "@mui/material";
import Barras from "../../../assets/imagens/barras.png";

export default function HeroSection() {
  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #0060b1, #9EE2FE)",
        py: 10,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <div className="flex justify-center">
          {/* Texto à esquerda */}
          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                color: "white",
                textAlign: "center",
                marginLeft: { xs: "0", sm: "0", md: "0" },
              }}
            >
              <Typography
                variant="h3"
                component="h1"
                sx={{
                  fontSize: { xs: "1.9rem", sm: "2.5rem" },
                  maxWidth: "600px",
                  width: { xs: "70%", sm: "60%" },
                  mb: 3,
                  alignContent: "center",
                  textAlign: "left",
                }}
              >
                QUAL O GRANDE SONHO DE TODO EMPRESÁRIO?
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: "1.15rem", sm: "1.5rem", md: "1.75rem" },
                  alignContent: "center",
                  mb: 3,
                  textAlign: "left",
                  alignItems: "center",
                  marginLeft: { xs: "0", sm: "0", md: "0" },
                }}
              >
                Ver a sua empresa{" "}
                <Box
                  component="span"
                  sx={{
                    fontWeight: "bold",
                    display: { xs: "block", sm: "inline" }, // Quebra linha só no mobile
                  }}
                >
                  crescer!
                </Box>
              </Typography>
            </Box>
          </Grid>

          {/* Imagem à direita */}
          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                position: "relative",
                alignItems: "center",
                height: { xs: "100px", sm: "200px", md: "250px" },
                paddingTop: { xs: "10px", sm: "20px" },
                marginLeft: { xs: "0", sm: "0" },
              }}
            >
              <img
                className="w-40 max-w-[500px] absolute -bottom-40 md:w-50 md:-bottom-30"
                src={Barras}
                alt="Descrição da imagem"
              />
            </Box>
          </Grid>
        </div>
      </Container>
    </Box>
  );
}
