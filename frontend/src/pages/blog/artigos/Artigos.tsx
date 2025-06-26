import { Box, Typography, Paper, Grid, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Artigos() {
  return (
    <Box className="space-y-6">
      {/* Pipeline de Vendas */}
      <Paper elevation={1} className="p-6 rounded-md">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={4}>
            <img
              src="https://via.placeholder.com/300x200"
              alt="Pipeline de Vendas"
              className="w-full h-auto rounded-md"
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Box className="flex items-center gap-4 mb-4">
              <Box className="h-1 w-16 bg-blue-600"></Box>
              <Typography variant="h5" component="h2" className="font-bold">
                Pipeline de Vendas: O Que é e Como Impactam as Suas Vendas?
              </Typography>
            </Box>
            <Typography variant="body1" className="text-gray-700 mb-4">
              O Pipeline de Vendas é um método fundamental para empresas que
              desejam atrair novos clientes e manter um relacionamento comercial
              saudável. Através dele, é possível visualizar de forma eficiente
              as etapas do processo de vendas e da jornada do cliente,
              possibilitando uma compreensão detalhada do que deve ser realizado
              em cada fase, buscando, assim, ter um funil de vendas mais
              direcionado para o objetivo principal do negócio.
            </Typography>
            <Button
              endIcon={<ArrowForwardIcon />}
              className="text-blue-600 hover:text-blue-800"
              href="#"
            >
              LEIA MAIS
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Relatórios Financeiros */}
      <Paper elevation={1} className="p-6 rounded-md">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={4}>
            <img
              src="https://via.placeholder.com/300x200"
              alt="Relatórios Financeiros"
              className="w-full h-auto rounded-md"
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Box className="flex items-center gap-4 mb-4">
              <Box className="h-1 w-16 bg-blue-600"></Box>
              <Typography variant="h5" component="h2" className="font-bold">
                Relatórios Financeiros: O Que São e Como Aplicá-los Na Prática?
              </Typography>
            </Box>
            <Typography variant="body1" className="text-gray-700 mb-4">
              Em meio a uma rotina empresarial repleta de informações e dados
              cruciais, os relatórios financeiros emergem como ferramentas
              indispensáveis para os gestores. Além de acompanhar regularmente
              esses relatórios, é possível obter uma visão abrangente da empresa
              e avaliar se ela está trilhando o caminho certo para alcançar os
              objetivos e metas estabelecidos.
            </Typography>
            <Button
              endIcon={<ArrowForwardIcon />}
              className="text-blue-600 hover:text-blue-800"
              href="#"
            >
              LEIA MAIS
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default Artigos;
