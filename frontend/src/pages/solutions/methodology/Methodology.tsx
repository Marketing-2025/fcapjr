import { Typography, Grid, Box } from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import BarChartIcon from "@mui/icons-material/BarChart";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import metodologia1 from "../../../assets/home/MetodoImg.png";
import metodologia2 from "../../../assets/home/MetodoImg2.png";
import metodologia3 from "../../../assets/home/MetodoImg3.png";
import metodologia4 from "../../../assets/home/MetodoImg4.png";
import metodologia5 from "../../../assets/home/MetodoImg5.png";
import { useState, useEffect } from "react";

function useIsMobile(breakpoint = 900) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= breakpoint);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}

export function Methodology() {
  const isMobile = useIsMobile(); // Coloque o hook aqui
  return (
    <Box component="section" className="w-full max-w-6xl mx-auto px-4 py-16">
      <Box
        className="text-center mb-16"
        sx={{
          display: "flex",
          flexDirection: "column", // Organiza os elementos verticalmente
          alignItems: "center", // Centraliza horizontalmente
          justifyContent: "center", // Centraliza verticalmente
        }}
      >
        <Typography
          variant="h4"
          className="text-4xl font-bold text-[#1a365d]"
          sx={{
            marginBottom: "2rem",
            fontSize: "3.2em", // Adiciona espaçamento abaixo do título
          }}
        >
          METODOLOGIA FCAP JR
        </Typography>
        <Typography
          sx={{ maxWidth: "550px" }}
          className="max-w-3xl mx-auto text-[#1a365d] text-lg"
          fontSize={"1.2em"}
        >
          Adotamos uma abordagem exclusiva que integra métodos extremamente
          reconhecidos, como{" "}
          <strong>PMBOK, Scrum, PDCA e Design Thinking</strong>. Nosso trabalho
          é guiado por quatro pilares essenciais:
        </Typography>
      </Box>

      <Grid
        container
        spacing={0}
        sx={{
          display: "flex",
          justifyContent: "center",
          maxWidth: { xs: "650px", md: "100%" },
          m: "auto",
        }}
      >
        <div
          className="flex h-full gap-1 max-w-[100%]"
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
          }}
        >
          {/* Primeira imagem com hover */}
          <Box
            className="relative group w-full max-h-[700px] min-h-[700px] overflow-hidden rounded-xl shadow-md transition-all duration-500"
            sx={{
              width: { xs: "100%", md: "40%" }, // 100% no mobile, 40% no desktop
              minWidth: { xs: "100%", md: "0" },
              height: { xs: "400px", md: "100%" }, // ajuste a altura conforme necessário
              "&:hover": {
                width: { xs: "100%", md: "80%" },
              },
            }}
          >
            <img
              src={metodologia5}
              alt="Imagem base"
              className="w-full h-full object-cover"
              style={{ height: "100vh", width: "100vw" }}
            />

            <img
              src={metodologia1}
              alt="Imagem sobreposta"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 z-10 ${
                isMobile ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            />
            <Box
              className="absolute bottom-4 flex items-center gap-2 z-20"
              sx={{
                width: "auto",
                justifyContent: "flex-end",
                alignItems: "center",
                right: 0,
                paddingRight: { xs: "2rem", md: "3rem" }, // ajuste conforme o visual desejado
              }}
            >
              <Typography
                sx={{
                  fontSize: "1em",
                  fontWeight: "bold",
                  color: "#fff",
                  background: "none",
                  boxShadow: "none",
                  borderRadius: 0,
                  textAlign: "right",
                  m: 0,
                  p: 0,
                }}
                className="z-40"
              >
                COMUNICAÇÃO
              </Typography>
              <ChatBubbleIcon className="w-8 h-8 text-white" />
            </Box>
            <Box
              className={`absolute inset-0 bg-[#00000080] text-white flex flex-col items-center justify-center transition-opacity duration-300 ${
                isMobile ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
              sx={{
                padding: "20px",
                backgroundImage: `URL(${metodologia2})`,
                backgroundSize: "cover",
              }}
            >
              <Typography
                sx={{ fontSize: "1.7em", fontWeight: "bold", mb: 2 }}
                className="text-2xl font-bold text-[#0c4da2] z-40 mb-4"
              >
                COMUNICAÇÃO
              </Typography>
              <Typography
                sx={{ fontSize: "1.1em" }}
                className="text-[#1a365d] w-full z-40"
              >
                Valorizamos a clareza e a transparência na troca de informações.
                Para garantir que todos estejam alinhados, utilizamos reuniões
                semanais, grupos de WhatsApp para facilitar a comunicação
                instantânea e uma documentação acessível e organizada. Isso é
                algo que surge a partir da utilização do método PMBOK, que
                define os processos internos para existir maior sinergia e
                entendimento entre as equipes.
              </Typography>
            </Box>
          </Box>

          <Box
            className="relative group w-full max-h-[700px] min-h-[700px] overflow-hidden rounded-xl shadow-md transition-all duration-500"
            sx={{
              width: { xs: "100%", md: "40%" }, // 100% no mobile, 40% no desktop
              minWidth: { xs: "100%", md: "0" },
              height: { xs: "400px", md: "100%" }, // ajuste a altura conforme necessário
              "&:hover": {
                width: { xs: "100%", md: "80%" },
              },
            }}
          >
            <img
              src={metodologia2}
              alt="Imagem base"
              className="w-full h-full object-cover"
              style={{ height: "100vh", width: "100vw" }}
            />

            <img
              src={metodologia1}
              alt="Imagem sobreposta"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 z-10 ${
                isMobile ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            />
            <Box
              className="absolute bottom-4 flex items-center gap-2 z-20"
              sx={{
                width: "auto",
                justifyContent: "flex-end",
                alignItems: "center",
                right: 0,
                paddingRight: { xs: "2rem", md: "3rem" }, // ajuste conforme o visual desejado
              }}
            >
              <Typography
                sx={{
                  fontSize: "1em",
                  fontWeight: "bold",
                  color: "#fff",
                  background: "none",
                  boxShadow: "none",
                  borderRadius: 0,
                  textAlign: "right",
                  m: 0,
                  p: 0,
                }}
                className="z-40"
              >
                INOVAÇÃO
              </Typography>
              <LightbulbIcon className="w-8 h-8 text-white" />
            </Box>
            <Box
              className={`absolute inset-0 bg-[#00000080] text-white flex flex-col items-center justify-center transition-opacity duration-300 ${
                isMobile ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
              sx={{
                padding: "20px",
                backgroundImage: `URL(${metodologia2})`,
                backgroundSize: "cover",
              }}
            >
              <Typography
                sx={{ fontSize: "1.7em", fontWeight: "bold", mb: 2 }}
                className="text-2xl font-bold text-[#0c4da2] z-40 mb-4"
              >
                INOVAÇÃO
              </Typography>
              <Typography
                sx={{ fontSize: "1.1em" }}
                className="text-[#1a365d] w-80 z-40"
              >
                Comprometemo-nos a agregar valor aos projetos por meio de
                soluções criativas. Nossa equipe participa regularmente de
                treinamentos e workshops que mantêm todos atualizados com as
                melhores práticas e novas tecnologias. Ferramentas de Design
                Thinking, como o PDCA (Plan, Do, Check, Act), são utilizadas
                para avaliar e ajustar as soluções durante o projeto.
              </Typography>
            </Box>
          </Box>

          <Box
            className="relative group w-full max-h-[700px] min-h-[700px] overflow-hidden rounded-xl shadow-md transition-all duration-500"
            sx={{
              width: { xs: "100%", md: "40%" }, // 100% no mobile, 40% no desktop
              minWidth: { xs: "100%", md: "0" },
              height: { xs: "400px", md: "100%" }, // ajuste a altura conforme necessário
              "&:hover": {
                width: { xs: "100%", md: "80%" },
              },
            }}
          >
            <img
              src={metodologia4}
              alt="Imagem base"
              className="w-full h-full object-cover"
              style={{ height: "100vh", width: "100vw" }}
            />

            <img
              src={metodologia1}
              alt="Imagem sobreposta"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 z-10 ${
                isMobile ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            />
            <Box
              className="absolute bottom-4 flex items-center gap-2 z-20"
              sx={{
                width: "auto",
                justifyContent: "flex-end",
                alignItems: "center",
                right: 0,
                paddingRight: { xs: "2rem", md: "3rem" }, // ajuste conforme o visual desejado
              }}
            >
              <Typography
                sx={{
                  fontSize: "1em",
                  fontWeight: "bold",
                  color: "#fff",
                  background: "none",
                  boxShadow: "none",
                  borderRadius: 0,
                  textAlign: "right",
                  m: 0,
                  p: 0,
                }}
                className="z-40"
              >
                ADAPTABILIDADE
              </Typography>
              <BarChartIcon className="w-8 h-8 text-white" />
            </Box>
            <Box
              className={`absolute inset-0 bg-[#00000080] text-white flex flex-col items-center justify-center transition-opacity duration-300 ${
                isMobile ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
              sx={{
                padding: "20px",
                backgroundImage: `URL(${metodologia2})`,
                backgroundSize: "cover",
              }}
            >
              <Typography
                sx={{ fontSize: "1.7em", fontWeight: "bold", mb: 2 }}
                className="text-2xl font-bold text-[#0c4da2] z-40 mb-4"
              >
                ADAPTABILIDADE
              </Typography>
              <Typography
                sx={{ fontSize: "1.1em" }}
                className="text-[#1a365d] w-80 z-40"
              >
                Acreditamos que a flexibilidade é crucial para o sucesso de
                qualquer projeto. Nossa equipe adota metodologias ágeis, como o
                Scrum, permitindo ajustes rápidos ao longo do processo de
                execução. Além disso, temos uma gestão de riscos eficaz e um
                sistema de feedback contínuo que garante que possamos responder
                rapidamente a imprevistos e mudanças, mantendo os projetos
                relevantes mesmo em cenários incertos.
              </Typography>
            </Box>
          </Box>

          <Box
            className="relative group w-full max-h-[700px] min-h-[700px] overflow-hidden rounded-xl shadow-md transition-all duration-500"
            sx={{
              width: { xs: "100%", md: "40%" }, // 100% no mobile, 40% no desktop
              minWidth: { xs: "100%", md: "0" },
              height: { xs: "400px", md: "100%" }, // ajuste a altura conforme necessário
              "&:hover": {
                width: { xs: "100%", md: "80%" },
              },
            }}
          >
            <img
              src={metodologia3}
              alt="Imagem base"
              className="w-full h-full object-cover"
              style={{ height: "100vh", width: "100vw" }}
            />

            <img
              src={metodologia1}
              alt="Imagem sobreposta"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 z-10 ${
                isMobile ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            />
            <Box
              className="absolute bottom-4 flex items-center gap-2 z-20"
              sx={{
                width: "auto",
                justifyContent: "flex-end",
                alignItems: "center",
                right: 0,
                paddingRight: { xs: "2rem", md: "3rem" }, // ajuste conforme o visual desejado
              }}
            >
              <Typography
                sx={{
                  fontSize: "1em",
                  fontWeight: "bold",
                  color: "#fff",
                  background: "none",
                  boxShadow: "none",
                  borderRadius: 0,
                  textAlign: "right",
                  m: 0,
                  p: 0,
                }}
                className="z-40"
              >
                RESULTADO
              </Typography>
              <AssignmentIcon className="w-8 h-8 text-white" />
            </Box>
            <Box
              className={`absolute inset-0 bg-[#00000080] text-white flex flex-col items-center justify-center transition-opacity duration-300 ${
                isMobile ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
              sx={{
                padding: "20px",
                backgroundImage: `URL(${metodologia2})`,
                backgroundSize: "cover",
              }}
            >
              <Typography
                sx={{ fontSize: "1.7em", fontWeight: "bold", mb: 2 }}
                className="text-2xl font-bold text-[#0c4da2] z-40 mb-4"
              >
                RESULTADO
              </Typography>
              <Typography
                sx={{ fontSize: "1.1em" }}
                className="text-[#1a365d] w-80 z-40"
              >
                Nosso objetivo final é sempre superar expectativas e garantir o
                sucesso dos projetos. Para isso, estabelecemos metas claras e
                mensuráveis (SMART), acompanhadas por indicadores-chave de
                desempenho (KPIs) que monitoram o progresso do projeto. Durante
                a execução, fornecemos relatórios para total visibilidade de
                cada etapa. Após a conclusão, realizamos avaliações como o Net
                Promoter Score (NPS).
              </Typography>
            </Box>
          </Box>
        </div>
      </Grid>
    </Box>
  );
}
