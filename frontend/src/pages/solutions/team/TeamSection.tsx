import { Container, Grid, Typography } from "@mui/material";
import {
  Language as GlobeIcon,
  Event as CalendarIcon,
  Build as ToolsIcon,
  Handshake as HandshakeIcon,
} from "@mui/icons-material";
import TeamCard from "./TeamCard";

const TeamSection = () => {
  return (
    <section
      className="py-16 px-4 bg-gray-50"
      style={{ background: "#f5f5f0" }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h3"
          className="text-[#1D2E5E] font-bold text-center"
          sx={{
            fontSize: "3.5rem",
            marginBottom: "2rem",
          }}
        >
          EQUIPE DO PROJETO
        </Typography>
        <Grid
          container
          spacing={4}
          sx={{
            // No mobile: row horizontal com scroll
            "@media (max-width: 900px)": {
              flexWrap: "nowrap",
              overflowX: "auto",
              flexDirection: "row",
            },
          }}
        >
          <Grid
            item
            size={3}
            sx={{
              minWidth: { xs: 260, md: "auto" }, // largura mínima para mobile
              border: "1px solid #d1d5db",
              transition: "background 0.3s, box-shadow 0.3s, border 0.3s",
              "&:hover": {
                background: "#e3e8f7",
                borderRadius: 2,
                border: "2px solid #1d4ed8",
                boxShadow: "0 2px 8px 0 rgba(30, 64, 175, 0.10)",
              },
            }}
          >
            <TeamCard
              icon={<GlobeIcon className="text-blue-700" fontSize="large" />}
              title="Equipe Estratégica"
              description="Proporciona uma visão global e orientação estratégica."
            />
          </Grid>
          <Grid
            item
            size={3}
            sx={{
              minWidth: { xs: 260, md: "auto" },
              border: "1px solid #d1d5db",
              transition: "background 0.3s, box-shadow 0.3s, border 0.3s",
              "&:hover": {
                background: "#e3e8f7",
                borderRadius: 2,
                border: "2px solid #1d4ed8",
                boxShadow: "0 2px 8px 0 rgba(30, 64, 175, 0.10)",
              },
            }}
          >
            <TeamCard
              icon={<CalendarIcon className="text-blue-700" fontSize="large" />}
              title="Equipe Tática"
              description="Gerencia o planejamento, a coordenação das atividades e cronograma."
            />
          </Grid>
          <Grid
            item
            size={3}
            sx={{
              minWidth: { xs: 260, md: "auto" },
              border: "1px solid #d1d5db",
              transition: "background 0.3s, box-shadow 0.3s, border 0.3s",
              "&:hover": {
                background: "#e3e8f7",
                borderRadius: 2,
                border: "2px solid #1d4ed8",
                boxShadow: "0 2px 8px 0 rgba(30, 64, 175, 0.10)",
              },
            }}
          >
            <TeamCard
              icon={<ToolsIcon className="text-blue-700" fontSize="large" />}
              title="Equipe Operacional"
              description="Foca na implementação prática e eficiente das tarefas."
            />
          </Grid>
          <Grid
            item
            size={3}
            sx={{
              minWidth: { xs: 260, md: "auto" },
              border: "1px solid #d1d5db",
              transition: "background 0.3s, box-shadow 0.3s, border 0.3s",
              "&:hover": {
                background: "#e3e8f7",
                borderRadius: 2,
                border: "2px solid #1d4ed8",
                boxShadow: "0 2px 8px 0 rgba(30, 64, 175, 0.10)",
              },
            }}
          >
            <TeamCard
              icon={
                <HandshakeIcon className="text-blue-700" fontSize="large" />
              }
              title="Sucesso do Cliente"
              description="Mantém um canal de comunicação contínuo com o cliente."
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default TeamSection;
