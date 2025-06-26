import {
  Typography,
  Box,
  Container,
  Grid,
  Avatar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ideacao from "../../../assets/imagens/ideacao.png";
import fcapDestaca from "../../../assets/imagens/fcapDestaca.png";
import upeDestaca2024 from "../../../assets/imagens/upeDestaca2024.png";
import upeDestaca2025 from "../../../assets/imagens/upeDestaca2025blue.png";
import FerreiraCosta from "../../../assets/logos/ferreira-costa.png";
import Deloitte from "../../../assets/logos/Deloitte_Logo.png";
import Ray from "../../../assets/logos/cropped-Ray-Gradient.png";
import RedBull from "../../../assets/logos/red-bull-logo.png";
import Ambev from "../../../assets/logos/ambev.png";
import FundaçãoEstudar from "../../../assets/logos/EstudarLogo.png";
import Stone from "../../../assets/logos/Stone_pagamentos.png";
import AmbevCervejaria from "../../../assets/logos/Logo_Ambev.png";
import HospitalPortuguesa from "../../../assets/logos/real-portugues.png";
import Visagio from "../../../assets/logos/Visagio_logo.png";
import Moura from "../../../assets/logos/moura-logo.png";
import Gotemburgo from "../../../assets/logos/Nova_Gotemburgo.png";
import Acelera from "../../../assets/logos/acelera.png";
import Accenture from "../../../assets/logos/accenture-logo.png";
import QCA from "../../../assets/logos/QueirozCavalcanti-logo.png";

import { useState } from "react";
import { Margin } from "@mui/icons-material";

interface TimelineItem {
  year: string;
  title: string;
  logo?: string;
  active: boolean;
}

interface StatItem {
  count: string;
  description: string;
}

interface PartnerLogo {
  name: string;
  src: string;
}

export default function NossaHistoria() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const timelineItems: TimelineItem[] = [
    {
      year: "2022",
      title: "IDEAÇÃO",
      logo: `${ideacao}`,
      active: true,
    },
    {
      year: "2023",
      title: "FCAP DESTACA",
      logo: `${fcapDestaca}`,
      active: true,
    },
    {
      year: "2024",
      title: "UPE DESTACA",
      logo: `${upeDestaca2024}`,
      active: true,
    },
    {
      year: "2025",
      title: "UPE DESTACA",
      logo: `${upeDestaca2025}`,
      active: false,
    },
  ];

  const stats: StatItem[] = [
    {
      count: "+25",
      description: "GRANDES EMPRESAS E PALESTRANTES NO EVENTO",
    },
    {
      count: "+2000",
      description: "CONGRESSISTAS MELHORES UNIVERSIDADES DE PERNAMBUCO",
    },
  ];

  const partners: PartnerLogo[] = [
    { name: "Ferreira Costa", src: FerreiraCosta },
    { name: "Deloitte", src: Deloitte },
    { name: "Ray", src: Ray },
    { name: "Red Bull", src: RedBull },
    { name: "Ambev", src: Ambev },
    { name: "Fundação Estudar", src: FundaçãoEstudar },
    { name: "Stone", src: Stone },
    { name: "Ambev Cervejaria", src: AmbevCervejaria },
    { name: "Hospital Portuguesa", src: HospitalPortuguesa },
    { name: "Visagio", src: Visagio },
    { name: "Moura", src: Moura },
    { name: "Gotemburgo", src: Gotemburgo },
    { name: "Acelera", src: Acelera },
    { name: "Accenture", src: Accenture },
    { name: "QCA", src: QCA },
  ];

  return (
    <Box className="bg-gray-50 py-16 px-4 md:px-8">
      <Container maxWidth="lg">
        {/* História Section */}
        <Typography
          variant="h3"
          component="h2"
          align="center"
          className="mb-16 text-[#0000A0] font-bold"
        >
          NOSSA HISTÓRIA
        </Typography>

        {/* Timeline */}
        <Box className="relative my-24">
          {/* Timeline Line */}
          <Box className="absolute left-0 right-0 h-1 bg-gray-300 top-1/2 -translate-y-1/2" />

          {/* Timeline Items */}
          <Box className="relative flex justify-between items-start">
            {timelineItems.map((item, index) => (
              <Box
                key={index}
                className={`flex items-center mb-3 gap-2 ${
                  index % 2 === 0
                    ? "flex-col justify-end"
                    : "flex-col-reverse justify-end"
                }`}
              >
                {/* Year */}
                <Typography
                  variant={isMobile ? "h6" : "h5"}
                  className="bg-gray-50 px-4 text-[#656462] mb-4 font-semibold"
                >
                  {item.year}
                </Typography>

                {/* Line point */}

                {/* Title */}
                <img
                  src={item.logo}
                  className={` bg-gray-50 py-2 ${
                    index === 0
                      ? isMobile ? "text-[#001AD2] w-22" : "text-[#001AD2] w-32"
                      : index === 2
                      ? isMobile ? "text-[#1328C6] w-20" : "text-[#1328C6] w-30"
                      : index === 3
                      ? isMobile ? "text-[#0F0D84] w-20 pt-0" : "text-[#0F0D84] w-32"
                      : isMobile ? "text-[#0F0D84] w-26" : "text-[#0F0D84] w-48"
                  }`}
                />
              </Box>
            ))}
          </Box>
        </Box>

        {/* Em 2024 Section */}
        <Box className="mb-24">
          <Typography
            variant="h2"
            component="h2"
            align="center"
            className="text-[#160762] font-bold"
          >
            EM 2024
          </Typography>

          <div className="flex flex-col lg:flex-row mt-10 items-center justify-center gap-8">
            {stats.map((stat, index) => (
              <div className="" key={index}>
                <div className="bg-linear-to-r from-white via-[#DCD8DB] to-white p-6 rounded-md shadow-md flex flex-col gap-5 md:flex-row items-center">
                  <Typography
                    variant="h2"
                    className="text-[#160762] font-bold mb-4 md:mb-0 md:mr-6"
                  >
                    {stat.count}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "1.2em",
                      textAlign: "center",
                      fontFamily: "Montserrat",
                      lineHeight: "1em",
                    }}
                    className="text-[#160762] w-56 md:text-left"
                  >
                    {stat.description}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </Box>

        {/* Parceiros Section */}
        <Box>
          <Typography
            variant="h3"
            component="h2"
            align="center"
            className="mb-16 text-[#0000A0] font-bold"
            sx={{
              paddingBottom: "3rem", // Adiciona padding abaixo do título
            }}
          >
            PARCEIROS
          </Typography>

          {/* Responsivo: grid no mobile, linhas no desktop */}
          <div
            className={
              isMobile
                ? "grid grid-cols-3 gap-6 justify-items-center"
                : "flex flex-col items-center gap-8"
            }
          >
            {isMobile ? (
              partners.map((partner, index) => (
                <Box
                  key={index}
                  sx={{
                    width: 70,
                    height: 70,
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <img
                    src={partner.src}
                    alt={`Logo ${partner.name}`}
                    style={{
                      maxWidth: "70%",
                      maxHeight: "70%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              ))
            ) : (
              <>
                {/* Linha com 4 logos */}
                <div className="flex justify-center gap-8">
                  {partners.slice(0, 4).map((partner, index) => (
                    <Box
                      key={index}
                      sx={{
                        width: 100,
                        height: 100,
                        backgroundColor: "#fff",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <img
                        src={partner.src}
                        alt={`Logo ${partner.name}`}
                        style={{
                          maxWidth: "70%",
                          maxHeight: "70%",
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                  ))}
                </div>
                {/* Linha com 5 logos */}
                <div className="flex justify-center gap-8">
                  {partners.slice(4, 9).map((partner, index) => (
                    <Box
                      key={index}
                      sx={{
                        width: 100,
                        height: 100,
                        backgroundColor: "#fff",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <img
                        src={partner.src}
                        alt={`Logo ${partner.name}`}
                        style={{
                          maxWidth: "70%",
                          maxHeight: "70%",
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                  ))}
                </div>
                {/* Linha com 6 logos */}
                <div className="flex justify-center gap-8">
                  {partners.slice(9, 15).map((partner, index) => (
                    <Box
                      key={index}
                      sx={{
                        width: 100,
                        height: 100,
                        backgroundColor: "#fff",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <img
                        src={partner.src}
                        alt={`Logo ${partner.name}`}
                        style={{
                          maxWidth: "70%",
                          maxHeight: "70%",
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                  ))}
                </div>
              </>
            )}
          </div>
        </Box>
      </Container>
    </Box>
  );
}
