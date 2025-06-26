import { Box, Container, Typography } from "@mui/material";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import asaLocadora from "../../../assets/aliceCarousel/AsaLocadora.png";
import estrategica from "../../../assets/aliceCarousel/Estrategica.png";
import immax from "../../../assets/aliceCarousel/Immax.png";
import amasa from "../../../assets/aliceCarousel/Amasa.png";
import grupoMatheus from "../../../assets/aliceCarousel/grupomateus.png";
import argoFish from "../../../assets/aliceCarousel/Logo Agrofish.png";
import casaOrage from "../../../assets/aliceCarousel/Logo Casa Orange.png";
import elLoco from "../../../assets/aliceCarousel/Logo El Loco.png";
import frederick from "../../../assets/aliceCarousel/Logo Frederick Cookies.png";
import suape from "../../../assets/aliceCarousel/Porto Suape.png";
import qualiMar from "../../../assets/aliceCarousel/Qualimar-logomarca-simples.png";
import institutoJose from "../../../assets/aliceCarousel/instituto-jose-rocha-de-sa.png";
import arpel from "../../../assets/aliceCarousel/Logo Arpel.png";
import unique from "../../../assets/aliceCarousel/Logo Bang Bang.png";
import blackNinja from "../../../assets/aliceCarousel/Logo Blackninja.png";

const clients = [
  { name: "amasa", logo: amasa },
  { name: "asaLocadora", logo: asaLocadora },
  { name: "estrategica", logo: estrategica },
  { name: "grupomateus", logo: grupoMatheus },
  { name: "immax", logo: immax },
  { name: "argoFish", logo: argoFish },
  { name: "casaOrage", logo: casaOrage },
  { name: "elLoco", logo: elLoco },
  { name: "frederick", logo: frederick },
  { name: "suape", logo: suape },
  { name: "qualiMar", logo: qualiMar },
  { name: "institutoJose", logo: institutoJose },
  { name: "arpel", logo: arpel },
  { name: "unique", logo: unique },
  { name: "blackNinja", logo: blackNinja },
];

const handleDragStart = (e: { preventDefault: () => any }) =>
  e.preventDefault();

const items = clients.map((client, index) => (
  <Box
    key={index}
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 2,
    }}
  >
    <Box
      sx={{
        backgroundColor: "#f2e7d8",
        borderRadius: "8px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "70vw", sm: "50vw", md: "25vw" }, // Maior no mobile
        height: { xs: "38vw", sm: "28vw", md: "17vh" }, // Maior no mobile
        maxWidth: 350,
        maxHeight: 220,
        minHeight: 120,
      }}
    >
      <img
        src={client.logo}
        alt={client.name}
        onDragStart={handleDragStart}
        style={{
          width: "auto",
          height: "60px",
          maxWidth: "90%",
          objectFit: "contain",
        }}
      />
    </Box>
  </Box>
));

const ClientsSection = () => {
  return (
    <Box className="py-16 relative">
      <Container maxWidth="lg" className="relative z-10 mt-10">
        <Typography
          variant="h4"
          component="h3"
          className="text-[#1D2E5E] font-bold text-center"
          sx={{
            paddingTop: { xs: "1rem", md: "10rem" }, // Menor no mobile, igual no desktop
            fontSize: "3.5rem",
          }}
        >
          NOSSOS CLIENTES
        </Typography>

        <Typography
          variant="body1"
          className="text-[#1D2E5E] font-medium"
          sx={{
            textAlign: "center", // Alinha o texto horizontalmente no centro
            margin: "0 auto", // Centraliza o texto horizontalmente
            maxWidth: "700px", // Define uma largura máxima para o texto
            paddingTop: "2rem", // Espaçamento superior
            paddingBottom: "2rem", // Espaçamento inferior
            letterSpacing: "0.3em",
            fontSize: "1.2rem", // Tamanho da fonte
          }}
        >
          COM PAIXÃO PELO QUE FAZEMOS, IMPULSIONAMOS EMPRESAS COM SOLUÇÕES
          MODERNAS E PERSONALIZADAS.
        </Typography>

        <AliceCarousel
          mouseTracking
          items={items}
          responsive={{
            0: { items: 1 },
            600: { items: 2 },
            1024: { items: 4 },
            // 1440: { items: 4 },
            // 1920: { items: 5 },
          }}
          autoPlay
          autoPlayInterval={2000}
          autoWidth={false}
          autoHeight={false}
          infinite
          renderPrevButton={() => {
            return (
              <ArrowBackIosIcon className="text-[#1D2E5E] absolute top-22 -left-2" />
            );
          }}
          renderNextButton={() => {
            return (
              <ArrowForwardIosIcon className="text-[#1D2E5E] absolute top-22 -right-2" />
            );
          }}
        />
      </Container>
    </Box>
  );
};

export default ClientsSection;
