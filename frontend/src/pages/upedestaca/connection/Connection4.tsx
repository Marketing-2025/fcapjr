import {
  Container,
  Typography,
  Button,
  Paper,
  Grid,
  Avatar,
  Box,
  Divider,
} from "@mui/material";
import { BookOutlined, School } from "@mui/icons-material";
import upeBgElement from "../../../assets/imagens/upeBgElement.png"
import upeBgElement2 from "../../../assets/imagens/upeBgElement2.png"

function Connection4() {
  return (
    <div className="min-h-screen overflow-hidden bg-gray-50">

      {/* Produtos da Feira Section */}
      <Container maxWidth="lg" className="py-16">

        <div className="flex flex-wrap justify-center items-end gap-6">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          className="font-bold self-center pt-16 text-[#1a1a6c] mb-10 px-10"
          sx={{ fontWeight: "bold" }}
        >
          PRODUTOS
          <br />
          DA FEIRA
        </Typography>

          {/* Stand */}
          <div
            className="flex flex-col items-center w-80"
          >
            <Button
              variant="contained"
              className="absolute top-4 mb-4 bg-linear-to-r from-[#0416C1] via-[#14096F] to-[#0B18C1] rounded-full"
              sx={{
                borderRadius: "9999px",
                "&:hover": { backgroundColor: "#141456" },
              }}
            >
              STAND
            </Button>
            <Paper elevation={4} className="p-14 h-full w-full">
              <Typography align="center">
                Espaços de visibilidade e conexão da marca.
              </Typography>
            </Paper>
          </div>

          {/* Pitch */}
          <div
            className="flex flex-col items-center w-80"
          >
            <Button
              variant="contained"
              className="absolute top-4 mb-4 bg-linear-to-r from-[#0416C1] via-[#14096F] to-[#0B18C1] rounded-full"
              sx={{
                borderRadius: "9999px",
                "&:hover": { backgroundColor: "#141456" },
              }}
            >
              PITCH
            </Button>
            <Paper elevation={4} className="p-8 h-full w-full">
              <Typography align="center">
                Dinâmica em grupo liderada por especialistas em processo
                seletivo. Acesso à lista com perfil de candidatos. Processo
                facilitado de contratação.
              </Typography>
            </Paper>
          </div>

           {/* Jantar de Conexões */}
           <div
            className="flex flex-col items-center w-80 relative"
          >
            <Button
              variant="contained"
              className="absolute top-4 mb-4 bg-linear-to-r from-[#0416C1] via-[#14096F] to-[#0B18C1] rounded-full"
              sx={{
                borderRadius: "9999px",
                "&:hover": { backgroundColor: "#141456" },
              }}
            >
              JANTAR DE CONEXÕES
            </Button>
            <Paper elevation={4} className="p-8  h-full w-full">
              <Typography align="center">
                É um jantar de conexões em um restaurante com menu executivo.
                Direito a dois participantes no almoço para contato com outras
                empresas participantes.
              </Typography>
            </Paper>
          </div>

          {/* Banco de Talentos */}
          <div
            className="flex flex-col items-center w-80"
          >
            <Button
              variant="contained"
              className="absolute top-4 mb-4 bg-linear-to-r from-[#0416C1] via-[#14096F] to-[#0B18C1] rounded-full"
              sx={{
                borderRadius: "9999px",
                "&:hover": { backgroundColor: "#141456" },
              }}
            >
              BANCO DE TALENTOS
            </Button>
            <Paper elevation={4} className="p-8 h-full w-full">
              <Typography align="center">
                Lista com os dados de todos os congressistas e currículos, e
                também dos pós juniores da FCAP JR. Consultoria. Além de
                informações de contato caso o candidato seja compatível com
                alguma vaga de processo seletivo.
              </Typography>
            </Paper>
          </div>

          {/* Ativações */}
          <div
            className="flex flex-col items-center w-80"
          >
            <Button
              variant="contained"
              className="absolute top-4 mb-4 bg-linear-to-r from-[#0416C1] via-[#14096F] to-[#0B18C1] rounded-full"
              sx={{
                borderRadius: "9999px",
                "&:hover": { backgroundColor: "#141456" },
              }}
            >
              ATIVAÇÕES
            </Button>
            <Paper elevation={4} className="p-10 h-full w-full">
              <Typography align="center">
                Espaços de ativações fixas e pontuais feitas durante todo o
                evento.
              </Typography>
            </Paper>
          </div>

          {/* Foodtruck */}
          <div
            className="flex flex-col items-center w-80"
          >
            <Button
              variant="contained"
              className="absolute top-4 mb-4 bg-linear-to-r from-[#0416C1] via-[#14096F] to-[#0B18C1] rounded-full"
              sx={{
                borderRadius: "9999px",
                "&:hover": { backgroundColor: "#141456" },
              }}
            >
              FOODTRUCK
            </Button>
            <Paper elevation={4} className="p-6 h-full w-full">
              <Typography align="center">
                Área com a presença de empresas selecionadas, proporcionando
                variedade de opções de alimentação para congressistas e empresas
                participantes. Além de oferecer mais conforto e conveniência, a
                área visa criar um ambiente de networking informal durante a
                feira.
              </Typography>
            </Paper>
          </div>

          {/* Palestra */}
          <div
            className="flex flex-col items-center w-80"
          >
            <Button
              variant="contained"
              className="absolute top-4 mb-4 bg-linear-to-r from-[#0416C1] via-[#14096F] to-[#0B18C1] rounded-full"
              sx={{
                borderRadius: "9999px",
                "&:hover": { backgroundColor: "#141456" },
              }}
            >
              PALESTRA
            </Button>
            <Paper elevation={4} className="p-8 h-full w-full">
              <Typography align="center">
                Publicidade em mídias do evento. Direito a 1h de palestra,
                acesso a painel de led e computador e um espaço com staff
                exclusivos disponível para apoio.
              </Typography>
            </Paper>
          </div>

          {/* Roda de Conversa */}
          <div
            className="flex flex-col items-center w-80"
          >
            <Button
              variant="contained"
              className="absolute top-4 mb-4 bg-linear-to-r from-[#0416C1] via-[#14096F] to-[#0B18C1] rounded-full"
              sx={{
                borderRadius: "9999px",
                "&:hover": { backgroundColor: "#141456" },
              }}
            >
              RODA DE CONVERSA
            </Button>
            <Paper elevation={4} className="p-8 h-full w-full">
              <Typography align="center">
                Espaço interativo para debates entre congressistas e
                profissionais de mercado. Com temas estratégicos, a roda de
                conversa promove troca de experiências, insights valiosos e
                aproximação entre participantes e empresas.
              </Typography>
            </Paper>
          </div>
        </div>
      </Container>

      {/* Divider */}
      <div className="relative">
        <Divider className="absolute bg-linear-to-r from-[#D9D9D9] to-[#0B1096]"
          sx={{
            height: "4px",
            backgroundColor: "#1a1a6c",
            width: "65%",
            margin: "0 auto",
          }}
        />
      </div>

      {/* Público do Evento Section */}
      <Container maxWidth="xl" className="py-16">
        <div className="flex flex-col md:flex-row justify-center items-center gap-24">
          <Grid item xs={12} md={5}>
            <Typography
              variant="h3"
              component="h2"
              className="font-bold text-center text-[#110F8E] mb-10 md:mb-0"
              sx={{ fontWeight: "bold" }}
            >
              PÚBLICO
              <br />
              DO EVENTO
            </Typography>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box className="space-y-6">
              <Paper
                elevation={0}
                className="p-4 px-10 flex items-center gap-8"
                sx={{
                  border: "3px solid #110F8E",
                  borderRadius: "10px",
                }}
              >
                <BookOutlined sx={{ color: "#110F8E", fontSize: 50 }} />
                <Typography
                  variant="h5"
                  className="text-[#110F8E]"
                  sx={{ fontWeight: 500 }}
                >
                  Universitários de
                  <br />
                  Todos os Cursos.
                </Typography>
              </Paper>

              <Paper
                elevation={0}
                className="p-4 px-10 flex items-center gap-8"
                sx={{
                  border: "3px solid #110F8E",
                  borderRadius: "10px",
                }}
              >
                <School sx={{ color: "#110F8E", fontSize: 50 }} />
                <Typography
                  variant="h5"
                  className="text-[#110F8E]"
                  sx={{ fontWeight: 500 }}
                >
                  Pós Graduandos em
                  <br />
                  Busca de Empregos
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </div>
      </Container>

      {/* Divider */}
      <div className="relative">
        <Divider className="absolute right-0 bg-linear-to-r from-[#0B1096] to-[#D9D9D9]"
          sx={{
            height: "4px",
            backgroundColor: "#1a1a6c",
            width: "50%",
            margin: "0 auto",
          }}
        />
      </div>

      {/* Cases de Sucesso Section */}
      <Container className="py-16 relative">
      <img src={upeBgElement2} alt="" className="absolute -bottom-10 -right-16 w-[50%] h-auto" />

      <Box
        className="absolute top-50 md:top-0 -left-10 md:-left-40 w-2/4 h-auto overflow-hidden"
      >
        <img src={upeBgElement} alt="" />
      </Box>

        <Box className="relative z-10">
          <Typography

            align="center"
            className="mb-2"
            sx={{ fontWeight: "semibold", fontSize: "2.5rem" }}
          >
            CASES DE SUCESSO
          </Typography>
          <Typography
            align="center"
            className="font-bold text-[#1a1a6c] mb-10"
            sx={{ fontWeight: "bold", fontSize: "2.3rem" }}
          >
            CONGRESSISTAS
          </Typography>

          <div className="flex flex-col md:flex-row gap-10 w-[80%] m-auto mt-16">
          

            {/* Miguel Batista */}
            <div >
              <div className="bg-linear-to-r h-1.5 from-[#0B0F95] to-[#D9D9D9]"></div>
              <div className="bg-white p-6">
                <Box className="flex items-center mb-4">
                  <Avatar
                    sx={{ width: 64, height: 64, marginRight: 2 }}
                    src="/placeholder.svg"
                  />
                  <Box>
                    <Typography
                      className="font-bold text-[#001AD2]"
                      sx={{ fontSize: "1.1em", fontWeight: "bold", fontFamily: "Montserrat" }}
                    >
                      Miguel Batista
                    </Typography>
                    <Typography variant="body2" sx={{ fontFamily: "Montserrat" }}>
                      estudante de Ciência da Computação
                      <br />
                      <span className="text-[#001AD2] font-bold">Cesar School.</span>
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body2" className="italic px-4" sx={{ fontFamily: "Montserrat" }}>
                  "Durante a feira de estágios, ele chamou a atenção de uma das
                  fundadoras da Masterboi ao fazer uma pergunta inovadora em uma
                  dinâmica e que teve um match perfeito com a equipe da empresa.
                  Esse networking acelerou seu processo seletivo, resultando em
                  um estágio e se tornando um dos grandes cases de sucesso do
                  evento."
                </Typography>
              </div>
              <div className="bg-linear-to-r h-1.5 from-[#D9D9D9] to-[#0B0F95]"></div>
            </div>

            {/* Isabela Melo */}

            <div className="">

            <div className="bg-linear-to-r h-1.5 from-[#0B0F95] to-[#D9D9D9]"></div>
              <div className="bg-white p-6">
                <Box className="flex items-center mb-4">
                  <Avatar
                    sx={{ width: 64, height: 64, marginRight: 2 }}
                    src="/placeholder.svg"
                  />
                  <Box>
                    <Typography
                      className="font-bold text-[#001AD2]"
                      sx={{ fontSize: "1.1em", fontWeight: "bold", fontFamily: "Montserrat" }}
                    >
                      Isabela Melo
                    </Typography>
                    <Typography variant="body2" sx={{ fontFamily: "Montserrat" }}>
                      Consultora Pós-Venda
                      <br />
                      <span className="text-[#001AD2] font-bold">Dreams Intercâmbios</span>
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body2" className="italic px-4 pb-0.5" sx={{ fontFamily: "Montserrat" }}>
                  "Participei do FCAP Destaca 2023 com meus amigos, lá
                  conhecemos várias empresas. Dentre elas, me identifiquei
                  bastante com o Dreams Intercâmbios e segui no Instagram.
                  Depois surgiram vagas de estágio por lá, enviei meu currículo
                  e fui selecionada. E após quatro meses estagiando, fui
                  efetivada."
                </Typography>
              </div>
              <div className="bg-linear-to-r h-1.5 from-[#D9D9D9] to-[#0B0F95]"></div>
            </div>
            
          </div>
          
        </Box>


          
      </Container>
    </div>
  );
}

export default Connection4;
