import type React from "react";
import { Grid, Box, Container } from "@mui/material";
import { SectionTitle } from "../sectionTitle/SectionTitle";
import { Description } from "../description/Description";
import { ProcessStep } from "../processSection/ProcessStep";
import Vector1 from "../../../assets/imagens/vector-form-1.png";
import Vector2 from "../../../assets/imagens/vector-form-2.png";

interface ExecutionPessoasProps {
  className?: string;
}

export const ExecutionPessoas: React.FC<ExecutionPessoasProps> = ({
  className = "",
}) => {
  return (
    <Box sx={{ backgroundColor: "#f5f5f0", minHeight: "100vh" }}>
      <Container maxWidth="lg" className={className}>
        <Grid sx={{ paddingBottom: "2rem" }}>
          <SectionTitle>MARCOS DE EXECUÇÃO</SectionTitle>
        </Grid>

        <Description>
          Nossos marcos de execução representam as etapas gerais que estruturam
          a solução de{" "}
          <span className="font-bold text-[#0d5a94]">Gestão de pessoas</span>{" "}
          como um todo. Dentro de cada marco, existem fases específicas que são
          definidas e personalizadas conforme as necessidades de cada projeto.
        </Description>

        <Grid container spacing={12} className="mb-12 relative">
          {/* Step 1 */}
          <Grid
            size={6}
            id="step-1"
            sx={{
              order: { xs: 1, md: 1 }, // Sempre primeiro
              width: { xs: "90vw", md: "320px" },
              height: { xs: "auto", md: "200px" },
              minHeight: { xs: 160, md: 200 },
              marginTop: "1rem",
              marginBottom: "1rem",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              position: "relative",
              zIndex: 1,
              backgroundColor: "#f5f5f5",
              mx: "auto",
            }}
          >
            <ProcessStep
              number={1}
              title="Diagnóstico e Análise Organizacional"
              description="Análise profunda do clima organizacional"
            />
          </Grid>

          {/* Step 3 */}
          <Grid
            size={6}
            id="step-3"
            sx={{
              order: { xs: 3, md: 2 }, // Mobile: 3º, Desktop: 2º
              width: { xs: "90vw", md: "320px" },
              height: { xs: "auto", md: "200px" },
              minHeight: { xs: 160, md: 200 },
              marginTop: { xs: "-3rem", md: "1rem" }, // Reduzido no mobile
              marginBottom: "1rem",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              position: "relative",
              zIndex: 1,
              backgroundColor: "#1D2E5E",
              mx: "auto",
            }}
          >
            <ProcessStep
              number={3}
              title="Acompanhamento e Aperfeiçoamento"
              description="Implementação de avaliações de desempenho personalizadas e ferramentas de monitoramento do progresso"
              position="right"
            />
          </Grid>

          {/* Step 2 */}
          <Grid
            container
            size={12}
            sx={{
              order: { xs: 2, md: 3 }, // Mobile: 2º, Desktop: 3º (embaixo)
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: " -8rem",
              marginBottom: "0rem",
              backgroundColor: "#f5f5f0",
            }}
          >
            {/* Espaço para imagem à esquerda */}
            <Grid
              item
              size={4}
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
                alignItems: "center",
                pr: { xs: 0, md: 1 },
              }}
            >
              <Box
                sx={{
                  width: { xs: "12vw", md: "7vw" },
                  height: { xs: "12vw", md: "7vw" },
                  minWidth: "40px",
                  minHeight: "40px",
                  maxWidth: "120px",
                  maxHeight: "120px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={Vector1}
                  alt="Imagem esquerda"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Grid>

            {/* Step 2 */}
            <Grid
              item
              xs={4}
              id="step-2"
              sx={{
                width: { xs: "90vw", md: "320px" },
                height: { xs: "auto", md: "200px" },
                minHeight: { xs: 160, md: 200 },
                marginTop: { xs: "4rem ", md: "4rem" }, // Reduzido no mobile
                marginBottom: { xs: "0rem", md: "1rem" }, // Reduzido no mobile
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                position: "relative",
                zIndex: 1,
                backgroundColor: "#f5f5f5",
                mx: "auto",
              }}
            >
              <ProcessStep
                number={2}
                title="Planejamento e Estruturação"
                description="Estruturação do organograma e desenvolvimento de planos de carreira personalizados"
                position="center"
              />
            </Grid>

            {/* Espaço para imagem à direita */}
            <Grid
              item
              size={4}
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-start",
                alignItems: "center",
                pl: { xs: 0, md: 1 },
              }}
            >
              <Box
                sx={{
                  width: { xs: "12vw", md: "7vw" },
                  height: { xs: "12vw", md: "7vw" },
                  minWidth: "40px",
                  minHeight: "40px",
                  maxWidth: "120px",
                  maxHeight: "120px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={Vector2}
                  alt="Imagem direita"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Box
          sx={{
            width: { xs: "60vw", sm: "340px", md: "420px", lg: "480px" }, // Menor no mobile
            height: { xs: "32px", md: "72px" }, // Menor no mobile
            mx: "auto",
            mt: { xs: 10, md: 5 }, // Mais espaço no topo no mobile
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById("form-contato-business");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
            style={{
              width: "100%",
              height: "100%",
              fontSize: window.innerWidth < 600 ? "0.9rem" : "1.2rem", // Fonte menor no mobile
              fontWeight: 700,
              background: "#0d5a94",
              color: "#fff",
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
              transition: "background 0.2s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Planeje seu projeto
          </button>
        </Box>
      </Container>
    </Box>
  );
};
