import { Box, Typography, Avatar, Paper } from "@mui/material";

export function TestimonialSection() {
  return (
    <Box className="py-16 px-8 bg-white">
      <Paper
        elevation={3}
        className="max-w-4xl mx-auto p-8 rounded-lg relative"
      >
        <Typography
          variant="h1"
          className="absolute text-blue-600"
          sx={{
            left: "-1rem",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "9rem",
            fontFamily: "serif",
            opacity: 0.7,
          }}
        >
          "
        </Typography>

        <Box className="ml-12">
          <Typography variant="h6" className="italic mb-6 font-bold">
            Maior profissionalização e engajamento para alcançar melhores
            resultados.
          </Typography>

          <Typography className="mb-6">
            Acreditamos que o trabalho desenvolvido pela FCAP JR. Consultoria
            estimulará o maior engajamento das equipes dos postos, da equipe
            gerencial das unidades e da equipe comercial, devido à sugestão de
            ferramentas de CRM, fidelização e gamificação. Acarretando dessa
            maneira uma maior segurança nas informações e acesso mais rápido
            para gerir a carteira de clientes. Além disso, podemos identificar
            uma mudança de mindset, postura, direcionamento de setor,
            formalização dos processos e aquisição do CRM. E sobre o futuro,
            acreditamos em uma maior profissionalização na captação de novos
            clientes, do atendimento, na abordagem, no relacionamento e na
            maximização do engajamento das equipes para alcançar melhores
            resultados.
          </Typography>

          <Box className="flex items-center">
            <Avatar
              src="https://placeholder.com/64x64"
              alt="Regina Lins"
              sx={{ width: 64, height: 64, marginRight: 2 }}
            />
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Regina Lins
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Diretora Executiva - Postos Pichilau
              </Typography>
            </Box>
          </Box>
        </Box>

        <Typography
          variant="h1"
          className="absolute text-blue-600"
          sx={{
            right: "-1rem",
            bottom: "2rem",
            fontSize: "9rem",
            fontFamily: "serif",
            opacity: 0.7,
          }}
        >
          "
        </Typography>
      </Paper>

      <Box className="flex justify-center mt-8">
        <Box
          className="h-3 w-3 rounded-full bg-blue-600 mx-1"
          component="span"
        />
        <Box
          className="h-3 w-3 rounded-full bg-gray-300 mx-1"
          component="span"
        />
        <Box
          className="h-3 w-3 rounded-full bg-gray-300 mx-1"
          component="span"
        />
      </Box>
    </Box>
  );
}
