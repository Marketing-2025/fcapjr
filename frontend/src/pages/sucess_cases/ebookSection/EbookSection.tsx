import { Container, Grid, Typography, Box, Paper } from "@mui/material";
import EbookForm from "./EbookForm";
import ebookBg from "../../../assets/imagens/ebook-bg.png";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";

function EbookSection() {
  const benefits = [
    "A diferença prática entre Outbound Marketing e Inbound Marketing",
    "Quais são os softwares que você já deveria estar investindo para a geração de novas oportunidades de vendas",
    "As formas de converter os seus contatos em Leads e modos de se relacionar com os mesmos",
    "Conceitos da área de Marketing que você deve ter na ponta da língua",
  ];

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#004a8f",
          backgroundImage: `URL(${ebookBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "white",
          py: 16,
          textAlign: "center",
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="h4"
            component="h1"
            fontWeight="100"
            textAlign="left"
            gutterBottom
          >
            E-BOOK
          </Typography>
          <Box
            sx={{
              width: "100%",
              maxWidth: "530px",
              mx: "auto",
              borderTop: "1px solid white",
              my: 2,
            }}
          />
          <Typography variant="h5" component="h2" fontWeight="semibold">
            Como aumentar as vendas por meio do marketing
          </Typography>
        </Container>
      </Box>

      <Box sx={{ backgroundColor: "#f5f5f5", py: 8, m: "auto" }}>
        <Container maxWidth="lg" className="flex flex-row">
          <div className="m-auto lg:flex">
            <Grid
              item
              xs={12}
              md={6}
              sx={{ my: 4, maxWidth: "350px", mx: "auto" }}
            >
              <Typography
                variant="h6"
                component="h2"
                fontWeight="semibold"
                textAlign="center"
                margin="auto"
                gutterBottom
              >
                Baixe agora mesmo o nosso e-book e impulsione as vendas por meio
                do marketing
              </Typography>

              <Typography
                textAlign="center"
                fontWeight="semibold"
                fontSize="1.1em"
                sx={{ m: 3 }}
              >
                O E-book foi feito especialmente para você que deseja
                compreender mais sobre a área de marketing e como ela pode
                impulsionar os resultados da sua empresa!
              </Typography>

              <Typography textAlign="center" fontWeight="bold" sx={{ mb: 6 }}>
                A partir dessa leitura, você irá entender:
              </Typography>

              <Box
                sx={{ display: "flex", flexDirection: "column", gap: 3, mx: 3 }}
              >
                {benefits.map((benefit, index) => (
                  <Box
                    key={index}
                    sx={{ display: "flex", alignItems: "flex-center", gap: 1 }}
                  >
                    <CheckBoxOutlinedIcon
                      sx={{ color: "#004a8f", flexShrink: 0 }}
                    />
                    <Typography>{benefit}</Typography>
                  </Box>
                ))}
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: "transparent",
                  p: 3,
                  borderRadius: 2,
                  height: "100%",
                }}
              >
                <EbookForm />
              </Paper>
            </Grid>
          </div>
        </Container>
      </Box>
    </>
  );
}

export default EbookSection;
