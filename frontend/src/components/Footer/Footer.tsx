import { useNavigate } from "react-router-dom";
import {
  Typography,
  Button,
  Container,
  Grid,
  Box,
  List,
  ListItem,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import logoFooter from "../../assets/logos/fecap.png";

export default function Footer() {
  const navigate = useNavigate();

  const scrollToHomeForm = () => {
    navigate("/#form-contato-home");
  };

  return (
    <Box className="bg-[#00509e] text-white py-8">
      <Container maxWidth="lg">
        <Grid container alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <Grid
            item
            xs={12}
            md={4}
            className="flex justify-center md:justify-start"
          >
            {/* Logo da FCAP JR (substitua pelo caminho correto da imagem) */}
            <img
              src={logoFooter} // Substitua pelo caminho correto da imagem
              alt="FCAP JR Logo"
              style={{ maxWidth: "100px", height: "auto" }} // Ajuste o tamanho, se necessário
            />
          </Grid>

          {/* Button */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#F4E8DB",
                color: "#00509e",
                width: { xs: "100%", sm: "14em" }, // Responsivo: 100% no mobile, fixo no desktop
                maxWidth: "320px",
                p: { xs: 1.2, sm: 2 },
                fontSize: { xs: "1em", sm: "1.3em" },
                "&:hover": {
                  backgroundColor: "#E8E5DC",
                },
                textTransform: "none",
                fontWeight: "500",
              }}
              fullWidth={true}
              onClick={scrollToHomeForm}
            >
              Planeje seu projeto
            </Button>
          </Grid>

          {/* Social Media Icons */}
          <Grid
            item
            xs={12}
            md={4}
            className="flex justify-center md:justify-end gap-4"
          >
            <a
              href="https://www.linkedin.com/company/fcap-jr--consultoria/" // Insira o link do LinkedIn aqui
              className="text-white hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon fontSize="large" />
            </a>
            <a
              href="https://www.instagram.com/fcapjr?igsh=ZDNhZ3VmcmxzMTNr" // Insira o link do Instagram aqui
              className="text-white hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon fontSize="large" />
            </a>
          </Grid>
        </Grid>

        <Grid container spacing={4} className="mt-8">
          {/* Important Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="h3" className="font-bold mb-4">
              LINKS IMPORTANTES
            </Typography>
            <List>
              <ListItem disablePadding className="mb-2">
                <a href="#" className="text-white hover:underline">
                  • Contato
                </a>
              </ListItem>
              <ListItem disablePadding className="mb-2">
                <a href="#" className="text-white hover:underline">
                  • Sobre nós
                </a>
              </ListItem>
              <ListItem disablePadding className="mb-2">
                <a href="#" className="text-white hover:underline">
                  • Cases de Sucesso
                </a>
              </ListItem>
              <ListItem disablePadding className="mb-2">
                <a href="#" className="text-white hover:underline">
                  • Política de Privacidade
                </a>
              </ListItem>
            </List>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={8}>
            <Typography variant="h6" component="h3" className="font-bold mb-4">
              INFORMAÇÕES DE CONTATO
            </Typography>

            <Box className="flex items-start gap-3 mb-4">
              <LocationOnIcon className="mt-1 flex-shrink-0" />
              <Typography variant="body1">
                Av. Sport Clube do Recife, 252 – Madalena, Recife – PE,
                50750-500
              </Typography>
            </Box>

            <Box className="flex items-start gap-3 mb-4">
              <AccessTimeIcon className="mt-1 flex-shrink-0" />
              <Typography variant="body1">
                De segunda a sexta-feira –<br />
                Das 8h às 18hrs
              </Typography>
            </Box>
          </Grid>

          {/* Additional Contact Information */}
          <Grid item xs={12} md={4}>
            <Box className="flex items-start gap-3 mb-4">
              <Typography variant="body1">(81) 98106-7088</Typography>
            </Box>

            <Box className="flex items-start gap-3 mb-4">
              <Typography variant="body1">contato@fcapjr.com</Typography>
            </Box>
          </Grid>
        </Grid>

        <Typography variant="body2" className="text-center mt-8">
          FCAP JR. CONSULTORIA © 2025 - TODOS OS DIREITOS RESERVADOS
        </Typography>
      </Container>
    </Box>
  );
}
