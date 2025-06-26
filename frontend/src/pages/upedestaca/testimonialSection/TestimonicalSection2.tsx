import { Container, Typography, Grid, Box } from "@mui/material";
import { TestimonialCard2 } from "../testimonialSection/TestimonialCard2";

export function TestimonialsSection2() {
  return (
    <Container maxWidth="lg" className="py-16 relative">
      <Box
        className="absolute top-0 left-0 w-1/4 h-full"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "25%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "#2563eb",
            borderTopRightRadius: "100%",
          }}
        />
      </Box>

      <Box className="relative z-10">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          className="font-bold mb-2"
          sx={{ fontWeight: "bold" }}
        >
          CASES DE SUCESSO
        </Typography>
        <Typography
          variant="h3"
          component="h3"
          align="center"
          className="font-bold text-[#1a1a6c] mb-10"
          sx={{ fontWeight: "bold", color: "#1a1a6c" }}
        >
          CONGRESSISTAS
        </Typography>

        <Grid container spacing={4} className="mt-16">
          <Grid item xs={12} md={6}>
            <TestimonialCard2
              name="Miguel Batista"
              role="estudante de Ciência da Computação"
              company="Cesar School"
              testimonial="Durante a feira de estágios, ele chamou a atenção de uma das fundadoras da Masterboi ao fazer uma pergunta inovadora em uma dinâmica e que teve um match perfeito com a equipe da empresa. Esse networking acelerou seu processo seletivo, resultando em um estágio e se tornando um dos grandes cases de sucesso do evento."
              imageSrc="/placeholder.svg"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TestimonialCard2
              name="Isabela Melo"
              role="Consultora Pós-Venda"
              company="Dreams Intercâmbios"
              testimonial="Participei do FCAP Destaca 2023 com meus amigos, lá conhecemos várias empresas. Dentre elas, me identifiquei bastante com o Dreams Intercâmbios e segui no Instagram. Depois surgiram vagas de estágio por lá, enviei meu currículo e fui selecionada. E após quatro meses estagiando, fui efetivada."
              imageSrc="/placeholder.svg"
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
