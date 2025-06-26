import { Box, Typography, Container, Grid } from "@mui/material";

const Hero = ({ title }) => {
  let titleText = [
    <Typography
      variant="h1"
      sx={{
        fontSize: { xs: "2.5rem", md: "3.5rem" },
        fontWeight: "bold",
        color: "#0e5288",
        lineHeight: 1.2,
      }}
    >
      <Box component="span" sx={{ display: "block" }}>
        MAPEAMENTO
      </Box>
      <Box component="span" sx={{ display: "block" }}>
        DE PROCESSOS
      </Box>
    </Typography>,
    <Typography
      variant="h1"
      sx={{
        fontSize: { xs: "2.5rem", md: "3.5rem" },
        fontWeight: "bold",
        color: "#0e5288",
        lineHeight: 1.2,
      }}
    >
      <Box component="span" sx={{ display: "block" }}>
        GESTÃO
      </Box>
      <Box component="span" sx={{ display: "block" }}>
        ESTRATÉGICA
      </Box>
    </Typography>,
    <Typography
      variant="h1"
      sx={{
        fontSize: { xs: "2.5rem", md: "3.5rem" },
        fontWeight: "bold",
        color: "#0e5288",
        lineHeight: 1.2,
      }}
    >
      <Box component="span" sx={{ display: "block" }}>
        MARKETING
      </Box>
      <Box component="span" sx={{ display: "block" }}>
        E VENDAS
      </Box>
    </Typography>,
    <Typography
      variant="h1"
      sx={{
        fontSize: { xs: "2.5rem", md: "3.5rem" },
        fontWeight: "bold",
        color: "#0e5288",
        lineHeight: 1.2,
      }}
    >
      <Box component="span" sx={{ display: "block" }}>
        PLANO
      </Box>
      <Box component="span" sx={{ display: "block" }}>
        DE NEGÓCIOS
      </Box>
    </Typography>,
    <Typography
      variant="h1"
      sx={{
        fontSize: { xs: "2.5rem", md: "3.5rem" },
        fontWeight: "bold",
        color: "#0e5288",
        lineHeight: 1.2,
      }}
    >
      <Box component="span" sx={{ display: "block" }}>
        PESQUISA
      </Box>
      <Box component="span" sx={{ display: "block" }}>
        DE MERCADO
      </Box>
    </Typography>,
    <Typography
      variant="h1"
      sx={{
        fontSize: { xs: "2.5rem", md: "3.5rem" },
        fontWeight: "bold",
        color: "#0e5288",
        lineHeight: 1.2,
      }}
    >
      <Box component="span" sx={{ display: "block" }}>
        GESTÃO
      </Box>
      <Box component="span" sx={{ display: "block" }}>
        DE PESSOAS
      </Box>
    </Typography>,
  ];
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#f5f5f0",
        py: { xs: 8, md: 12 },
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 10 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: { xs: 3, md: 0 } }}>{titleText[title - 1]}</Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.5rem", md: "2rem" },
                color: "#0e5288",
                fontWeight: 500,
              }}
            >
              Soluções personalizadas
              <br />
              que fazem a diferença.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Decorative blue shapes */}
      <Box
        sx={{
          position: "absolute",
          top: 40,
          right: 40,
          width: 96,
          height: 96,
          bgcolor: "#a7d2ea",
          opacity: 0.8,
          borderRadius: 1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 80,
          right: 160,
          width: 128,
          height: 64,
          bgcolor: "#a7d2ea",
          opacity: 0.6,
          borderRadius: 1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 160,
          right: 240,
          width: 64,
          height: 128,
          bgcolor: "#a7d2ea",
          opacity: 0.4,
          borderRadius: 1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 40,
          left: 240,
          width: 96,
          height: 96,
          bgcolor: "#a7d2ea",
          opacity: 0.5,
          borderRadius: 1,
        }}
      />
    </Box>
  );
};

export default Hero;
