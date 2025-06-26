import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Button,
  FormControlLabel,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

interface CaseCardProps {
  title: string;
  description: string;
  starred?: boolean;
}

function CaseCard({ title, description, starred = false }: CaseCardProps) {
  return (
    <Card
      variant="outlined"
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {starred && (
        <Box
          sx={{ position: "absolute", top: 16, right: 16, color: "#004a8f" }}
        >
          <StarIcon />
        </Box>
      )}
      <CardContent sx={{ px: 3 }}>
        <Typography
          variant="h4"
          component="h3"
          sx={{ color: "#000", fontWeight: "bold", pr: 5 }}
        >
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

function SuccessCases() {
  const cases = [
    {
      title: "E-LOG",
      description: "Agilidade e segurança necessária aos caminhoneiros.",
      starred: true,
    },
    {
      title: "Moura Tacógrafos",
      description: "Agilidade e segurança necessária aos caminhoneiros.",
      starred: true,
    },
    {
      title: "Cult Hotel",
      description: "Agilidade e segurança necessária aos caminhoneiros.",
      starred: true,
    },
  ];

  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: "linear-gradient(to right, #ffffff, #f0f0f0)",
        width: "100%",
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{ color: "#004a8f", fontWeight: "semibold", mb: 10 }}
        >
          CASES DE SUCESSO
        </Typography>

        <div className="flex flex-col items-center m-auto justify-between lg:flex-row lg:max-w-[1900px] gap-3">
          {cases.map((caseItem, index) => (
            <Grid
              sx={{
                width: "100%",
                height: "300px",
                "&:hover": {
                  boxShadow: "0 2px 6px 1px #005396",
                  borderRadius: 2,
                },
              }}
              item
              xs={12}
              md={4}
              key={index}
            >
              <CaseCard
                title={caseItem.title}
                description={caseItem.description}
                starred={caseItem.starred}
              />
            </Grid>
          ))}
        </div>

        <Box sx={{ maxWidth: "600px", m: "0 auto" }}>
          <Box
            component="form"
            id="form-contato-home"
            // onSubmit={handleSubmit}
            sx={{
              py: 6,
              px: 4, // px menor para responsividade
              backgroundColor: "#a8d0e6",
              // backgroundImage: `URL(${ebookForm})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              // Remova o maxHeight daqui!
            }}
          >
            {/* ...todos os campos, inclusive o checkbox e o botão... */}
            <FormControlLabel
              control={/* ... */}
              label={/* ... */}
              sx={{ mt: 1 }}
            />
            <Box sx={{ textAlign: "center", mt: 1 }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#1D2E5E",
                  "&:hover": { backgroundColor: "#003a70" },
                  px: 4,
                  py: 1,
                  fontWeight: "bold",
                }}
                // disabled={isLoading}
              >
                Solicitar agora
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default SuccessCases;
