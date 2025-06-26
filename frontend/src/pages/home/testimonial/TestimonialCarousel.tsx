import { useState } from "react";
import { Box, Typography, Avatar, Paper, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import aspas from "../../../assets/imagens/aspas.png";

interface Testimonial {
  id: number;
  quote: string;
  highlight: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
}

export function TestimonialCarousel() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      highlight:
        "Maior profissionalização e engajamento para alcançar melhores resultados.",
      quote:
        "Acreditamos que o trabalho desenvolvido pela FCAP JR. Consultoria estimulará o maior engajamento das equipes dos postos, da equipe gerencial das unidades e da equipe comercial, devido à sugestão de ferramentas de CRM, fidelização e gamificação. Acarretando dessa maneira uma maior segurança nas informações e acesso mais rápido para gerir a carteira de clientes. Além disso, podemos identificar uma mudança de mindset, postura, direcionamento de setor, formalização dos processos e aquisição do CRM. E sobre o futuro, acreditamos em uma maior profissionalização na captação de novos clientes, do atendimento, na abordagem, no relacionamento e na maximização do engajamento das equipes para alcançar melhores resultados.",
      name: "Regina Lins",
      title: "Diretora Executiva",
      company: "Postos Pichilau",
      avatar: "",
    },
    {
      id: 2,
      highlight:
        "Transformação digital que impactou positivamente nossos resultados.",
      quote:
        "A parceria com a FCAP JR. trouxe uma nova perspectiva para nosso negócio. A implementação das soluções tecnológicas e a reorganização dos processos internos resultaram em um aumento significativo da produtividade e da satisfação dos nossos clientes. A equipe demonstrou profissionalismo e conhecimento técnico durante todo o projeto, entregando exatamente o que precisávamos para crescer no mercado atual.",
      name: "Carlos Mendes",
      title: "CEO",
      company: "TechSolutions Brasil",
      avatar: "",
    },
    {
      id: 3,
      highlight:
        "Consultoria estratégica que nos ajudou a expandir para novos mercados.",
      quote:
        "Contratar a FCAP JR. foi uma das melhores decisões que tomamos para nossa empresa. O estudo de mercado realizado pela equipe nos deu insights valiosos sobre oportunidades que não estávamos enxergando. Com base nas recomendações estratégicas, conseguimos expandir nossa operação para duas novas regiões com um plano sólido e bem estruturado. O retorno sobre o investimento superou nossas expectativas iniciais.",
      name: "Ana Paula Ferreira",
      title: "Diretora de Operações",
      company: "Grupo Inovare",
      avatar: "",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <Box
      className="mt-20 py-8 px-2 md:py-16 md:px-8"
      sx={{
        backgroundImage: "url('')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: { xs: "auto", md: "8vh" },
      }}
    >
      <Paper
        elevation={3}
        className="mx-auto p-4 md:p-8 rounded-lg relative"
        sx={{
          maxWidth: { xs: "98%", sm: "90%", md: "75%" },
          padding: { xs: "16px", sm: "24px", md: "32px" },
          minHeight: { xs: "auto", md: "350px" },
        }}
      >
        <Box className="relative">
          <img
            className="top-8 w-10 md:w-14 left-quote"
            src={aspas}
            alt=""
            style={{ left: 0 }}
          />

          <Box className="mx-2 md:mx-8">
            <Typography
              sx={{
                fontSize: { xs: "1.1em", sm: "1.3em", md: "1.5em" },
                fontWeight: "bold",
                mb: { xs: 2, md: 5 },
              }}
              className="italic"
            >
              {activeTestimonial.highlight}
            </Typography>

            <Typography
              className="mb-4 md:mb-6 text-justify"
              sx={{
                fontSize: { xs: "0.95em", md: "1.1em" },
              }}
            >
              {activeTestimonial.quote}
            </Typography>

            <Box className="flex items-center mt-6 md:mt-8">
              <Avatar
                src={activeTestimonial.avatar}
                alt={activeTestimonial.name}
                sx={{
                  width: { xs: 48, md: 64 },
                  height: { xs: 48, md: 64 },
                  marginRight: 2,
                }}
              />
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "1em", md: "1.1em" },
                  }}
                >
                  {activeTestimonial.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: { xs: "0.9em", md: "1em" } }}
                >
                  {activeTestimonial.title} - {activeTestimonial.company}
                </Typography>
              </Box>
            </Box>
          </Box>

          <img
            className="absolute right-0 scale-x-[-1] w-10 md:w-14 right-quote"
            src={aspas}
            alt=""
            style={{ bottom: 0, marginBottom: "1rem" }}
          />
        </Box>
      </Paper>

      <Box className="flex justify-center items-center mt-6 md:mt-8">
        <IconButton onClick={handlePrev} className="mx-1 md:mx-2">
          <ArrowBackIcon />
        </IconButton>

        {testimonials.map((_, index) => (
          <Box
            key={index}
            component="span"
            className={`h-2 w-2 md:h-3 md:w-3 rounded-full mx-1 cursor-pointer ${
              index === activeIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}

        <IconButton onClick={handleNext} className="mx-1 md:mx-2">
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
