import { Box, Container, Grid } from "@mui/material";
import FecapGroup from "../../../assets/home/PessoasGrupo.png";

const HeroSection = () => {
  return (
    <Box className="relative overflow-hidden py-16">
      {/* Background squares */}
      <Box className="absolute inset-0 z-0">
        {Array.from({ length: 10 }).map((_, i) => (
          <Box
            key={i}
            className="absolute bg-blue-400 opacity-20 rounded-sm"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </Box>

      <Container maxWidth="lg" className="h-[40vh] m-auto relative z-10">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box className="absolute h-[90%] max-w-[650px] top-10 pr-12 flex space-x-2 items-center justify-center md:justify-end md:w-[80%] md:right-24 lg:-right-10">
              {/* Main image */}
              <img
                src={FecapGroup}
                alt="Equipe FCAP Jr"
                className="w-full h-auto rounded"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
