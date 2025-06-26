import "../../../App.css";
import { Container, Typography, Card, CardContent, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface CaseCardProps {
  title: string;
  description: string;
  starred?: boolean;
}

function CaseCard({ title, description, starred = false }: CaseCardProps) {
  return (
    <Link to="/cases-de-sucesso" key={1}>
      <Card
        variant="outlined"
        sx={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-center",
          gap: 20,
          marginLeft: { xs: 4, sm: 0, md: 0 },
        }}
      >
        {starred && (
          <Box
            sx={{ position: "absolute", top: 16, right: 16, color: "#004a8f" }}
          >
            <StarIcon />
          </Box>
        )}
        <CardContent sx={{ px: 3 }}>
          <Typography
            variant="h4"
            component="h3"
            sx={{ color: "#000", fontWeight: "bold", pr: 5 }}
          >
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

function SuccessCases() {
  const cases = [
    {
      title: "Murta Consutoria",
      description: "Soluções personalizadas para empresas em diversas áreas.",
      starred: true,
    },
    {
      title: "Hope(Hospital de Olhos)",
      description: "Tratamento e cuidado da saúde ocular. ",
      starred: true,
    },
    {
      title: "Farmácia Tradição",
      description: "Serviços farmacêuticos de qualidade.",
      starred: true,
    },
    {
      title: "FK Engenharia",
      description:
        "Oferecendo serviços de construção, manutenção de linhas de transmissão, redes de distribuição e iluminação.",
      starred: true,
    },
    {
      title: "Arpel",
      description:
        "Excelência e busca continuamente otimizar seus processos para atender às demandas do mercado.",
      starred: true,
    },
    {
      title: "Sterycicle",
      description: "Maior empresa de gestão de resíduos do mundo.",
      starred: true,
    },
    {
      title: "Postos Pichilau",
      description:
        "Rede de postos de combustível com várias sedes no Nordeste, oferecendo mais do que apenas abastecimento.",
      starred: true,
    },
    {
      title: "Interiorati",
      description:
        "Empresa dedicada a transformar espaços internos por meio de uma gestão centralizada e ágil de obras e reformas.",
      starred: true,
    },
  ];

  const items = cases.map((caseItem, index) => (
    <Box
      sx={{
        width: { xs: "80vw", sm: "45vw", md: "28vw", lg: "20vw" },
        aspectRatio: "1 / 1",
        padding: 2,
      }}
      key={index}
    >
      <CaseCard
        title={caseItem.title}
        description={caseItem.description}
        starred={caseItem.starred}
      />
    </Box>
  ));

  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: "linear-gradient(to right, #ffffff, #f0f0f0)",
        width: "100%",
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{
            color: "#004a8f",
            fontWeight: "semibold",
            mb: 4,
            paddingTop: { xs: "0.5rem", md: 0 }, // Reduz o padding top apenas no mobile
          }}
        >
          CASES DE SUCESSO
        </Typography>

        <div className="flex items-stretch m-auto justify-between lg:flex-row lg:max-w-[2000px]">
          <AliceCarousel
            mouseTracking
            items={items}
            responsive={{
              0: { items: 1 },
              568: { items: 2 },
              1024: { items: 3 },
            }}
            autoPlay
            autoPlayInterval={2000}
            autoWidth={false}
            autoHeight={false}
            infinite
            renderPrevButton={() => {
              return (
                <ArrowBackIosIcon className="text-[#1D2E5E] absolute top-35 -left-4" />
              );
            }}
            renderNextButton={() => {
              return (
                <ArrowForwardIosIcon className="text-[#1D2E5E] absolute top-35 -right-4" />
              );
            }}
          />
        </div>
      </Container>
    </Box>
  );
}

export default SuccessCases;
