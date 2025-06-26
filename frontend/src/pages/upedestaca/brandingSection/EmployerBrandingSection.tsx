import type React from "react";
import { Container, Typography, Grid, Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import StatisticItem from "../statisticItem/StatisticItem";
import randstad from "../../../assets/imagens/randstad.png";

// Ensure statistics is typed as an array
interface Statistic {
  id: number;
  value: string;
  description: string;
}

const localStatistics: Statistic[] = [
  {
    id: 1,
    value: "10%",
    description:
      "a mais é o que as empresas estão pagando em salários se não tiverem uma marca forte.",
  },
  {
    id: 2,
    value: "80%",
    description:
      "dos líderes de recrutamento concordam que uma marca empregadora forte tem um impacto significativo em sua capacidade de contratar uma boa força de trabalho.",
  },
];

const EmployerBrandingSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box className="m-auto py-16 px-4 max-w-[1300px] md:px-8 bg-gray-50">
      <Container maxWidth="xl">
        <div className="flex flex-col items-center justify-center lg:flex-row">
          <div className="flex flex-col justify-center items-center *:m-auto">
            <Typography
              sx={{
                fontSize: { xs: "1.3em", md: "2.2em" },
                width: { xs: "100%", md: "75%" },
                fontFamily: "Montserrat",
                fontWeight: "500",
                mb: { xs: 4, md: 8 },
              }}
              className="text-[#160762]"
            >
              POR QUE SE TORNAR UMA EMPRESA COM UMA MARCA EMPREGADORA FORTE?
            </Typography>

            <Box>
              {isMobile
                ? localStatistics.map((statistic) => (
                    <Box
                      key={statistic.id}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        mb: 3,
                      }}
                    >
                      <Typography
                        sx={{ color: "#001AD2", fontWeight: "bold", fontSize: "3.2em" }}
                      >
                        {statistic.value}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: "#160762", fontSize: "1em" }}
                      >
                        {statistic.description}
                      </Typography>
                    </Box>
                  ))
                : localStatistics.map((statistic) => (
                    <StatisticItem key={statistic.id} statistic={statistic} />
                  ))}
            </Box>
            <Typography variant="caption" className="text-gray-500 block mt-10">
              DADOS: © RANDSTAD 2021 | EMPLOYER BRAND RESEARCH 2021 BRASIL
            </Typography>
          </div>

          <div className="">
            <img
              src={randstad}
              alt="Evento de recrutamento"
              className="rounded-lg w-96 lg:w-full max-w-[900px]"
            />
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default EmployerBrandingSection;
