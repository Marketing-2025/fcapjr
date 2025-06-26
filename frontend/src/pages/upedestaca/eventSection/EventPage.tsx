import { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Link,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import upeMaps from "../../../assets/imagens/upeMaps.png";
import {
  ICreateContactResponse,
  useCreateNewContact,
} from "../../../hooks/useCreateContact";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

interface ContactFormData {
  nome: string;
  email: string;
  telefone: string;
  empresa: string;
  setor: string;
  cargo: string;
  aceitaTermos: boolean;
}

export default function EventPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    setor: "",
    cargo: "",
    aceitaTermos: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const { mutate: CreatingNewContact, isLoading } = useCreateNewContact({
    onSuccess: (data: ICreateContactResponse) => {
      console.log("Contact created successfully: ", data);
      toast.success("Contato criado com sucesso!");
      setSubmitted(true);
    },
    onError: (error: any) => {
      console.error("Error creating contact: ", error);
      toast.error(
        "Erro ao criar contato. " +
          (error.response?.data?.errors?.error_message || error.message)
      );
    },
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name as string]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const conversionBody = {
      event_type: "CONVERSION",
      event_family: "CDP",
      payload: {
        conversion_identifier: "contato_gerado",
        email: formData.email,
        name: formData.nome,
        personal_phone: formData.telefone,
        job_title: formData.cargo,
        tags: [formData.empresa, formData.setor],
      },
    };

    CreatingNewContact(conversionBody);
  };

  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#form-contato-eventPage") {
      const el = document.getElementById("form-contato-eventPage");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Seção de localização do evento */}
      <section className="py-16 px-4 bg-white">
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h1"
            className="text-center text-[#1a0e5b] font-bold"
          >
            LOCAL DO EVENTO
          </Typography>

          <div className="flex justify-center gap-10 mt-10">
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                className="border-4 border-blue-800 rounded-lg overflow-hidden"
              >
                <img
                  src={upeMaps}
                  alt="Mapa do local do evento"
                  className="w-64 h-auto"
                />
              </Paper>
            </Grid>

            <div className="w-80">
              <Box className="space-y-8">
                <Box>
                  <Typography
                    sx={{ fontSize: "1.1em", fontWeight: "semibold" }}
                  >
                    ENDEREÇO DO EVENTO
                  </Typography>
                  <Typography sx={{ my: 1 }} variant="body1" className="mb-2">
                    AV. SPORT CLUBE DO RECIFE, 252 - MADALENA, RECIFE - PE,
                    50750-500
                  </Typography>
                  <Link
                    href="#"
                    sx={{ fontWeight: "bold", color: "#001AD2" }}
                    className="inline-flex items-center hover:text-blue-900"
                  >
                    <LocationOnIcon
                      className="mr-2 text-[#001AD2]"
                      fontSize="small"
                    />
                    Ver local no mapa
                  </Link>
                </Box>

                <Box>
                  <Typography
                    sx={{ fontSize: "1.1em", fontWeight: "semibold" }}
                  >
                    ENDEREÇO DO ESTACIONAMENTO
                  </Typography>
                  <Typography sx={{ my: 1 }} variant="body1" className="mb-2">
                    RUA JOSÉ MUCIO DE MONTEIRO, 305
                  </Typography>
                  <Link
                    href="#"
                    sx={{ fontWeight: "bold", color: "#001AD2" }}
                    className="inline-flex items-center hover:text-blue-900"
                  >
                    <LocationOnIcon
                      className="mr-2 text-[#001AD2]"
                      fontSize="small"
                    />
                    Ver local no mapa
                  </Link>
                </Box>
              </Box>
            </div>
          </div>
        </Container>
      </section>

      {/* Seção de formulário */}
      <section className="w-[85%] mb-20 m-auto py-16 px-4 bg-gradient-to-b from-[#120D83] from-30% to-[#EBECEC] text-white">
        <Container maxWidth="md">
          <Box className="text-center mb-6">
            <Typography variant="body1" className="mb-2">
              QUER FAZER PARTE DA FEIRA? ENTRE EM CONTATO
            </Typography>
            <Typography variant="h4" className="font-bold">
              AGENDE UMA CONVERSA!
            </Typography>
          </Box>

          {submitted ? (
            <Box sx={{ textAlign: "center", py: 4 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Obrigado!
              </Typography>
            </Box>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-2"
              id="form-contato-eventPage"
            >
              <InputLabel
                sx={{ color: "#fff", mt: 2, fontWeight: "semibold" }}
                shrink={false}
                htmlFor={"nome"}
              >
                Nome
              </InputLabel>
              <TextField
                sx={{ m: 0 }}
                id="nome"
                variant="outlined"
                fullWidth
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                required
                className="bg-white rounded"
                margin="normal"
              />

              <InputLabel
                sx={{ color: "#fff", mt: 2, fontWeight: "semibold" }}
                shrink={false}
                htmlFor={"email"}
              >
                Email *
              </InputLabel>
              <TextField
                sx={{ m: 0 }}
                id="email"
                variant="outlined"
                fullWidth
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-white rounded"
                margin="normal"
              />

              <InputLabel
                sx={{ color: "#fff", mt: 2, fontWeight: "semibold" }}
                shrink={false}
                htmlFor={"telefone"}
              >
                Telefone *
              </InputLabel>
              <TextField
                sx={{ m: 0 }}
                id="telefone"
                variant="outlined"
                fullWidth
                name="telefone"
                value={formData.telefone}
                onChange={handleInputChange}
                required
                className="bg-white rounded"
                margin="normal"
              />

              <InputLabel
                sx={{ color: "#fff", mt: 2, fontWeight: "semibold" }}
                shrink={false}
                htmlFor={"empresa"}
              >
                Empresa *
              </InputLabel>
              <TextField
                sx={{ m: 0 }}
                id="empresa"
                variant="outlined"
                fullWidth
                name="empresa"
                value={formData.empresa}
                onChange={handleInputChange}
                required
                className="bg-white rounded"
                margin="normal"
              />

              <FormControl fullWidth margin="normal">
                <InputLabel
                  variant="standard"
                  htmlFor="setor-label"
                  sx={{
                    position: "static",
                    transform: "none",
                    color: "#fff",
                    fontWeight: "semibold",
                  }}
                >
                  Setor da empresa
                </InputLabel>
                <Select
                  labelId="setor-label"
                  id="setor-label"
                  name="setor"
                  value={formData.setor}
                  onChange={handleInputChange}
                  sx={{ backgroundColor: "#fff", borderRadius: 1 }}
                  required
                >
                  <MenuItem value="tecnologia">Tecnologia</MenuItem>
                  <MenuItem value="saude">Saúde</MenuItem>
                  <MenuItem value="educacao">Educação</MenuItem>
                  <MenuItem value="financeiro">Financeiro</MenuItem>
                  <MenuItem value="varejo">Varejo</MenuItem>
                  <MenuItem value="outro">Outro</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth margin="normal">
                <InputLabel
                  variant="standard"
                  htmlFor="cargo-label"
                  sx={{
                    position: "static",
                    transform: "none",
                    color: "#fff",
                    fontWeight: "semibold",
                  }}
                >
                  Cargo
                </InputLabel>
                <Select
                  labelId="cargo-label"
                  id="cargo-label"
                  name="cargo"
                  value={formData.cargo}
                  onChange={handleInputChange}
                  sx={{ backgroundColor: "#fff", borderRadius: 1 }}
                  required
                >
                  <MenuItem value="ceo">CEO / Diretor</MenuItem>
                  <MenuItem value="gerente">Gerente</MenuItem>
                  <MenuItem value="coordenador">Coordenador</MenuItem>
                  <MenuItem value="analista">Analista</MenuItem>
                  <MenuItem value="outro">Outro</MenuItem>
                </Select>
              </FormControl>

              <FormControlLabel
                control={
                  <Checkbox
                    name="aceitaTermos"
                    checked={formData.aceitaTermos}
                    onChange={handleCheckboxChange}
                    required
                    sx={{
                      color: "#fff",
                      "&.Mui-checked": {
                        color: "#fff",
                      },
                    }}
                  />
                }
                label={
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "1em", color: "#fff" }}
                  >
                    Eu li e concordo com os termos.
                  </Typography>
                }
                sx={{ mt: 1 }}
              />

              <Box
                className="text-center mt-8"
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Button
                  sx={{ px: 16 }}
                  type="submit"
                  variant="contained"
                  size="large"
                  className="bg-[#1a0e5b] hover:bg-[#150b46] py-3"
                  disabled={isLoading}
                >
                  Enviar
                </Button>
              </Box>
            </form>
          )}
        </Container>
      </section>

      {/* Seção de footer
      <footer className="py-16 px-4 bg-[#1a0e5b] text-white">
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6} className="text-center md:text-left">
              <img
                src="https://via.placeholder.com/300x100"
                alt="UPE DESTACA 2025"
                className="mx-auto md:mx-0 mb-6"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Box className="space-y-6">
                <Typography variant="h5" className="font-bold">
                  DESCUBRA TALENTOS EXTRAORDINÁRIOS
                </Typography>
                <Typography variant="body1">
                  Participe da nossa Feira de Talentos e conecte sua empresa a
                  profissionais qualificados, prontos para fazer a diferença.
                </Typography>
                <Button
                  variant="contained"
                  className="bg-white text-[#1a0e5b] hover:bg-gray-100"
                >
                  INSCREVA SUA EMPRESA
                </Button>
              </Box>
            </Grid>
          </Grid>

          <Box className="my-12 border-t border-gray-700" />

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" className="font-bold mb-4">
                INFORMAÇÕES DE CONTATO
              </Typography>
              <Box component="address" className="not-italic space-y-4">
                <Box className="flex items-start">
                  <LocationOnIcon
                    className="mr-2 mt-1 flex-shrink-0"
                    fontSize="small"
                  />
                  <Typography>
                    Av. Sport Clube do Recife, 252 - Madalena, Recife - PE,
                    50750-500
                  </Typography>
                </Box>
                <Box className="flex items-start">
                  <AccessTimeIcon
                    className="mr-2 mt-1 flex-shrink-0"
                    fontSize="small"
                  />
                  <Typography>
                    Turnos: Manhã e Noite
                    <br />
                    10 e 11 de junho
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Box className="flex flex-col md:flex-row md:justify-end gap-6">
                <Box>
                  <Typography>@upedestaca</Typography>
                  <Typography>(81) 9670-7045</Typography>
                  <Typography>upedestaca@gmail.com</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Typography
            variant="caption"
            className="block mt-12 text-center text-gray-400"
          >
            FCAP JR. CONSULTORIA © 2025 - TODOS OS DIREITOS RESERVADOS
          </Typography>
        </Container>
      </footer> */}
    </div>
  );
}
