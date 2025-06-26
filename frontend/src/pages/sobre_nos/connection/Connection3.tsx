import {
  Button,
  Container,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import {
  Shield,
  Business,
  Build,
  People,
  Lightbulb,
  Campaign,
  LinkedIn,
  Instagram,
  LocationOn,
  AccessTime,
} from "@mui/icons-material";
import AreaCard from "../card/AreaCard";
import AwardCard from "../card/AwardCard";
import "../card/App.css";
import adepe from "../../../assets/logos/image 52_layerstyle (2).png";
import brasilJunior from "../../../assets/logos/BrasilJunior.png";
import banco from "../../../assets/logos/banco.png";
import layerstyle from "../../../assets/logos/layerstyle.png";

function Connection3() {
  return (
    <Grid>
      {/* Nossa Equipe Section */}
      <section className="py-16 px-4 bg-[#ebecec]">
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            className="text-center text-[#1a3b6e] font-bold mb-6"
            sx={{
              fontSize: { xs: "2.5rem", sm: "3rem" },
              marginBottom: "2rem",
            }}
          >
            NOSSA EQUIPE
          </Typography>

          <Typography
            variant="h6"
            className="text-center mb-12"
            sx={{
              fontSize: { xs: "1.3rem", sm: "1.2rem" },
              marginBottom: "2rem",
            }}
          >
            Na FCAP JR., somos compostos por áreas internas que trabalham juntas
            para atingir nossos objetivos como organização.
          </Typography>

          <Grid
            container
            spacing={3} // Espaçamento entre os itens
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{
              alignItems: "baseline",
            }}
          >
            {/* Institucional */}
            <Grid item size={{ xs: 2, sm: 4, md: 4 }}>
              <AreaCard
                icon={<Shield className="text-white" />}
                title="Institucional"
              />
            </Grid>

            {/* Negócios */}
            <Grid item size={{ xs: 2, sm: 4, md: 4 }}>
              <AreaCard
                icon={<Business className="text-white" />}
                title="Negócios"
              />
            </Grid>

            {/* Projetos */}
            <Grid item size={{ xs: 2, sm: 4, md: 4 }}>
              <AreaCard
                icon={<Build className="text-white" />}
                title="Projetos"
              />
            </Grid>

            {/* Gente e Gestão */}
            <Grid item size={{ xs: 2, sm: 4, md: 4 }}>
              <AreaCard
                icon={<People className="text-white" />}
                title="Gente e Gestão"
              />
            </Grid>

            {/* Inovação */}
            <Grid item size={{ xs: 2, sm: 4, md: 4 }}>
              <AreaCard
                icon={<Lightbulb className="text-white" />}
                title="Inovação"
              />
            </Grid>

            {/* Marketing */}
            <Grid item size={{ xs: 2, sm: 4, md: 4 }}>
              <AreaCard
                icon={<Campaign className="text-white" />}
                title="Marketing"
              />
            </Grid>
          </Grid>

          {/* <Typography
            variant="body1"
            className="text-center mt-8"
            sx={{
              fontSize: { xs: "1.2rem", sm: "1.2rem" },
              marginTop: "2rem",
              alignContent: "center",
            }}
          >
            Cada uma desempenha um papel estratégico para oferecer soluções
            completas e impactar positivamente nossos clientes e parceiros.
          </Typography> */}
        </Container>
      </section>

      {/* Prêmios e Reconhecimentos Section */}
      <section className="py-16 px-4 bg-[#ebecec]">
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            className="text-center text-[#1a3b6e] font-bold mb-16"
            sx={{
              fontSize: { xs: "2.2rem", sm: "3rem" },
              marginBottom: "2rem",
            }}
          >
            PRÊMIOS E RECONHECIMENTOS
          </Typography>

          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 2, sm: 4 }, // Espaçamento entre os cards
            }}
          >
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              sx={{
                maxWidth: "60vw",
                margin: "0",
              }}
            >
              <AwardCard
                title="PREMIAÇÃO CASE<br/>SUCESSO DO<br/>CLIENTE"
                logoSrc={layerstyle}
                logoAlt="V&O Logo"
                hasBorder={true}
              />
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              sx={{
                maxWidth: "60vw", // Define a largura máxima do card
                margin: "0", // Centraliza o card horizontalmente
              }}
            >
              <AwardCard
                title="PRÊMIO DE<br/>INOVAÇÃO EM<br/>EXECUÇÃO"
                logoSrc={banco}
                logoAlt="Banco do Nordeste "
                hasBorder={true}
              />
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              sx={{
                maxWidth: "60vw", // Define a largura máxima do card
                margin: "0px", // Centraliza o card horizontalmente
              }}
            >
              <AwardCard
                title="PRÊMIO DE<br/>CONSTÂNCIA EM<br/>RESULTADOS"
                logoSrc={adepe}
                logoAlt="ADEPE Logo"
                hasBorder={true}
              />
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              sx={{
                maxWidth: "60vw", // Define a largura máxima do card
                margin: "0", // Centraliza o card horizontalmente
              }}
            >
              <AwardCard
                title="PRÊMIO DE<br/>CONSTÂNCIA EM<br/>RESULTADOS"
                logoSrc={brasilJunior}
                logoAlt="Brasil Júnior Logo"
                hasBorder={false}
              />
            </Grid>
          </Grid>
        </Container>
      </section>
    </Grid>
  );
}

export default Connection3;
