import { Box, Typography, Grid, Paper } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

function CasesSucesso() {
  const cases = [
    {
      id: 1,
      title: "E-LOG",
      description: "Agilidade e segurança necessária aos caminhoneiros.",
    },
    {
      id: 2,
      title: "Moura Tacógrafos",
      description: "Agilidade e segurança necessária aos caminhoneiros.",
    },
    {
      id: 3,
      title: "Cult Hotel",
      description: "Agilidade e segurança necessária aos caminhoneiros.",
    },
  ];

  return (
    <Box>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        className="text-blue-900 font-bold mb-16"
      >
        CASES DE SUCESSO
      </Typography>

      <Grid container spacing={3}>
        {cases.map((caseItem) => (
          <Grid item xs={12} md={4} key={caseItem.id}>
            <Paper
              elevation={0}
              className="border border-gray-300 rounded-md p-6 relative h-full"
            >
              <Box className="absolute top-4 right-4 text-blue-700">
                <StarIcon />
              </Box>
              <Typography
                variant="h6"
                component="h3"
                className="text-blue-700 font-bold mb-4"
              >
                {caseItem.title}
              </Typography>
              <Typography variant="body2" className="text-gray-700">
                {caseItem.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CasesSucesso;
