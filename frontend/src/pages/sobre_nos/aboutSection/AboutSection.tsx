import { Box, Typography, Container, Paper } from "@mui/material";
import fcapGroup from "../../../assets/imagens/aboutFcapGroup.png";

const AboutSection = () => {
  return (
    <Box className="py-16 md:py-26" sx={{ bgcolor: "#ebecec" }}>
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        <div className="flex flex-col justify-center items-center gap-10 md:flex top-135 left-4 right-0 md:flex-row md:items-end">
          <div>
            <Box
              className="relative "
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginRight: { xs: "0", sm: "0", md: "0", lg: "50px" },
              }}
            >
              <Paper elevation={3} className="relative -mt-30 overflow-hidden">
                <img
                  src={fcapGroup}
                  alt="Equipe FCAP JR"
                  className="max-w-[500px] w-full h-full md:max-w-[420px]"
                />
              </Paper>

              {/* Decorative elements */}
              <Box
                className="absolute -left-5 -top-35 w-12 h-12"
                sx={{ bgcolor: "primary.main" }}
              />
              <Box
                className="absolute -right-5 -bottom-5 w-12 h-12"
                sx={{ bgcolor: "primary.dark" }}
              />
              <Box
                className="absolute left-20 -bottom-3 w-8 h-8"
                sx={{ bgcolor: "primary.light" }}
              />
              <Box
                className="absolute right-20 -top-33 w-8 h-8"
                sx={{ bgcolor: "primary.light" }}
              />
            </Box>
          </div>

          <div>
            <Box className="flex gap-2 md:flex-col justify-center items-start md:w-96 ">
              <Typography
                variant="h4"
                component="h2"
                fontWeight="bold"
                sx={{
                  color: "primary.dark",
                  textAlign: { xs: "right", md: "left" },
                }}
              >
                SOBRE NÓS
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "1em", md: "1.2em" },
                  fontWeight: "light",
                }}
                className="text-gray-700 leading-relaxed w-[90%]"
              >
                A FCAP JR. é formada por jovens que querem crescer junto desses
                sonhos, oferecendo soluções modernas e personalizadas para
                impulsionar essas empresas.
              </Typography>
            </Box>
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default AboutSection;
