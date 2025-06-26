import { Typography, Box } from "@mui/material";
import { SolutionCard } from "./SolutionCard";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import BusinessIcon from "@mui/icons-material/Business";
import PeopleIcon from "@mui/icons-material/People";
import CampaignIcon from "@mui/icons-material/Campaign";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import InsightsIcon from "@mui/icons-material/Insights"; // Replace with a valid icon
import { useNavigate } from "react-router-dom";

export default function Solution() {
  const navigate = useNavigate();
  const solutions = [
    {
      title: "Mapeamento de Processos",
      description:
        "Otimize recursos e padronize processos para alavancar resultados.",
      icon: <AccountTreeIcon className="w-16 h-16" />,
      bgColor: "bg-[#0c4da2]",
      textColor: "text-white",
      index: 1,
    },
    {
      title: "Plano de Negócio",
      description: "Transforme suas ideias em realidade.",
      icon: <BusinessIcon className="w-16 h-16" />,
      bgColor: "bg-white",
      textColor: "text-[#1a365d]",
      index: 4,
    },
    {
      title: "Gestão de Pessoas",
      description: "Impulsione os recursos humanos da sua empresa.",
      icon: <PeopleIcon className="w-16 h-16" />,
      bgColor: "bg-white",
      textColor: "text-[#1a365d]",
      index: 6,
    },
    {
      title: "Marketing e Vendas",
      description: "Impulsione suas vendas e posicione sua marca.",
      icon: <CampaignIcon className="w-16 h-16" />,
      bgColor: "bg-white",
      textColor: "text-[#1a365d]",
      index: 3,
    },
    {
      title: "Pesquisa de Mercado",
      description: "Estude seu público, seu mercado e seus concorrentes.",
      icon: <TrendingUpIcon className="w-16 h-16" />,
      bgColor: "bg-white",
      textColor: "text-[#1a365d]",
      index: 5,
    },
    {
      title: "Gestão Estratégica",
      description:
        "Defina a estratégia para alcançar os objetivos do seu negócio.",
      icon: <InsightsIcon className="w-16 h-16" />,
      bgColor: "bg-white",
      textColor: "text-[#1a365d]",
      index: 2,
    },
  ];

  return (
    <Box
      component="section"
      className="w-full max-w-[1600px] mx-auto px-4 py-16 overflow-y-auto"
      style={{ marginTop: "-5rem" }}
    >
      <Typography
        sx={{ fontSize: "3.5em" }}
        className="font-bold text-[#1a365d] text-center mb-16"
      >
        NOSSAS SOLUÇÕES
      </Typography>

      <div className="mt-16 flex flex-wrap justify-center gap-8">
        {solutions.map((solution, index) => (
          <button
            className="w-[100%] max-w-[350px] text-left cursor-pointer"
            key={index}
            onClick={() => {
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "auto" });
                navigate(`/solucoes`, {
                  state: solution.index,
                });
              }, 50);
            }}
          >
            <SolutionCard
              title={solution.title}
              description={solution.description}
              icon={solution.icon}
              bgColor={solution.bgColor}
              textColor={solution.textColor}
            />
          </button>
        ))}
      </div>
    </Box>
  );
}
