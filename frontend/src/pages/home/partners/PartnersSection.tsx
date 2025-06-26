import { Box, Typography, Button } from "@mui/material";
import { useState, useEffect, useRef } from "react";

import portugues from "../../../assets/aliceCarousel/2abad-rhp-marca-vertical-completa.png";
import accenture from "../../../assets/aliceCarousel/accenture-logo-1.png";
import ambev from "../../../assets/aliceCarousel/ambev.png";
import amcharm from "../../../assets/aliceCarousel/amcham.png";
import deloitte from "../../../assets/aliceCarousel/Deloitte_Logo.png";
import eduquese from "../../../assets/aliceCarousel/eduquese.png";
import estudaLogo from "../../../assets/aliceCarousel/EstudarLogo.png";
import audens from "../../../assets/aliceCarousel/Logo Audens.png";
import moura from "../../../assets/aliceCarousel/Logo Moura.png";
import stone from "../../../assets/aliceCarousel/Logo Stone.png";
import visagio from "../../../assets/aliceCarousel/Logo Visagio.png";
import starCarreiras from "../../../assets/aliceCarousel/start carreiras.png";
import prasoLogo from "../../../assets/aliceCarousel/logo_praso.png";

export function PartnersSection() {
  const partners = [
    { name: "portugues", logo: portugues },
    { name: "accenture", logo: accenture },
    { name: "ambev", logo: ambev },
    { name: "amcharm", logo: amcharm },
    { name: "deloitte", logo: deloitte },
    { name: "eduquese", logo: eduquese },
    { name: "estudaLogo", logo: estudaLogo },
    { name: "audens", logo: audens },
    { name: "moura", logo: moura },
    { name: "stone", logo: stone },
    { name: "visagio", logo: visagio },
    { name: "starCarreiras", logo: starCarreiras },
    { name: "prasoLogo", logo: prasoLogo },
  ];

  const extendedPartners = [
    partners[partners.length - 1], // último no início
    ...partners,
    partners[0], // primeiro no final
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [noTransition, setNoTransition] = useState(false); // NOVO
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = () => setCurrentIndex((prev) => prev + 1);
  const handlePrev = () => setCurrentIndex((prev) => prev - 1);

  const handleMouseEnter = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 2000);
  };

  useEffect(() => {
    // Quando chega no fim, faz o reset sem animação
    if (currentIndex === extendedPartners.length - 1) {
      setTimeout(() => {
        setNoTransition(true);
        setCurrentIndex(1);
      }, 500);
    }
    // Quando chega no início, faz o reset sem animação
    if (currentIndex === 0) {
      setTimeout(() => {
        setNoTransition(true);
        setCurrentIndex(extendedPartners.length - 2);
      }, 500);
    }
  }, [currentIndex, extendedPartners.length]);

  // Remove o noTransition logo após o reset para voltar a animar normalmente
  useEffect(() => {
    if (noTransition) {
      // Pequeno delay para garantir o reset visual
      setTimeout(() => setNoTransition(false), 20);
    }
  }, [noTransition]);

  useEffect(() => {
    handleMouseLeave();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <Box
      className="px-8 max-w-[100%] m-auto flex flex-col justify-center md:flex-row mt-15 gap-10"
      sx={{
        paddingTop: { xs: "4rem", md: "2rem" },
        paddingBottom: 0,
      }}
    >
      <Box
        className="w-full max-w-[800px] md:w-1/2 lg:w-[100%] p-8 rounded-lg text-white relative flex items-center justify-center"
        sx={{
          background: "linear-gradient(to bottom, #a7d9ed, #4690b9 40%)",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontSize: "2.3em",
            fontWeight: "semibold",
            marginBottom: "2rem",
            color: "#1D2E5E",
          }}
        >
          Parceiros que nos ajudam
          <br />a transformar negócios
          <br />
          como o seu.
        </Typography>

        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontSize: "1.3rem",
            lineHeight: "1.8",
            maxWidth: "500px",
          }}
        >
          Nossa equipe participa regularmente de treinamentos e workshops que
          mantêm todos atualizados com as melhores práticas e novas tecnologias.
          É graças a essa preparação que empresas incríveis confiam na FCAP JR.
          para entregar soluções que fazem a diferença.
        </Typography>
      </Box>

      <Box
        className="w-full mt-14 md:mt-16 md:w-80 p-8 flex flex-col items-center justify-center"
        sx={{
          height: "600px",
          overflow: "hidden",
          position: "relative",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Botão para subir */}
        <Button
          onClick={handlePrev}
          sx={{
            position: "absolute",
            top: "10px",
            zIndex: 10,
            backgroundColor: "#ffffff",
            borderRadius: "50%",
            minWidth: "40px",
            height: "40px",
          }}
        >
          ↑
        </Button>

        {/* Área do carrossel */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            transform: `translateY(-${currentIndex * 116}px)`,
            transition: noTransition ? "none" : "transform 0.5s ease-in-out", // <-- aqui!
            willChange: "transform",
          }}
        >
          {extendedPartners.map((partner, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: "#f2e7d8",
                borderRadius: "8px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                padding: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "200px",
                height: "100px",
                marginBottom: "16px",
              }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                style={{
                  width: "auto",
                  height: "60px",
                  objectFit: "contain",
                }}
              />
            </Box>
          ))}
        </Box>

        {/* Botão para descer */}
        <Button
          onClick={handleNext}
          sx={{
            position: "absolute",
            bottom: "10px",
            zIndex: 10,
            backgroundColor: "#ffffff",
            borderRadius: "50%",
            minWidth: "40px",
            height: "40px",
          }}
        >
          ↓
        </Button>
      </Box>
    </Box>
  );
}

export default PartnersSection;
