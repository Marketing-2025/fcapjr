import { Container, Typography, Grid } from "@mui/material";
import { EventCard2 } from "../eventSection/EventCard2";

export function EventSection2() {
  return (
    <Container maxWidth="lg" className="py-16">
      <Typography
        variant="h3"
        component="h2"
        align="center"
        className="font-bold text-[#1a1a6c] mb-10"
        sx={{ fontWeight: "bold", color: "#1a1a6c" }}
      >
        PRODUTOS
        <br />
        DA FEIRA
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <EventCard2 title="JANTAR DE CONEXÕES">
            É um jantar de conexões em um restaurante com menu executivo.
            Direito a dois participantes no almoço para contato com outras
            empresas participantes.
          </EventCard2>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <EventCard2 title="STAND">
            Espaços de visibilidade e conexão da marca.
          </EventCard2>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <EventCard2 title="PITCH">
            Dinâmica em grupo liderada por especialistas em processo seletivo.
            Acesso à lista com perfil de candidatos. Processo facilitado de
            contratação.
          </EventCard2>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <EventCard2 title="BANCO DE TALENTOS">
            Lista com os dados de todos os congressistas e currículos, e também
            dos pós juniores da FCAP JR. Consultoria. Além de informações de
            contato caso o candidato seja compatível com alguma vaga de processo
            seletivo.
          </EventCard2>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <EventCard2 title="FOODTRUCK">
            Área com a presença de empresas selecionadas, proporcionando
            variedade de opções de alimentação para congressistas e empresas
            participantes. Além de oferecer mais conforto e conveniência, a área
            visa criar um ambiente de networking informal durante a feira.
          </EventCard2>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <EventCard2 title="ATIVAÇÕES">
            Espaços de ativações fixas e pontuais feitas durante todo o evento.
          </EventCard2>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <EventCard2 title="PALESTRA">
            Publicidade em mídias do evento. Direito a 1h de palestra, acesso a
            painel de led e computador e um espaço com staff exclusivos
            disponível para apoio.
          </EventCard2>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <EventCard2 title="RODA DE CONVERSA">
            Espaço interativo para debates entre congressistas e profissionais
            de mercado. Com temas estratégicos, a roda de conversa promove troca
            de experiências, insights valiosos e aproximação entre participantes
            e empresas.
          </EventCard2>
        </Grid>
      </Grid>
    </Container>
  );
}
