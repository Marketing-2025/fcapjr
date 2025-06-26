import type React from "react";
import { useState } from "react";
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
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import upeMaps from "../../../assets/imagens/upeMaps.png";
import {
  ICreateContactResponse,
  useCreateNewContact,
} from "../../../hooks/useCreateContact";
import toast from "react-hot-toast";

interface ContactFormData {
  nome: string;
  email: string;
  telefone: string;
  empresa: string;
  cargo: string;
}

export default function EventPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    cargo: "",
  });

  const { mutate: CreatingNewContact, isLoading } = useCreateNewContact({
    onSuccess: (data: ICreateContactResponse) => {
      console.log("Contact created successfully: ", data);
      toast.success("Contato criado com sucesso!");
    },
    onError: (error: any) => {
      console.error("Error creating contact: ", error);
      toast.error(
        "Erro ao criar contato. " +
          (error.response?.data?.errors?.error_message || error.message)
      );
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // monta o body exatamente como o /platform/conversions espera
    const conversionBody = {
      event_type: "CONVERSION",
      event_family: "CDP",
      payload: {
        conversion_identifier: "contato_gerado",
        email: formData.email,
        name: formData.nome,
        personal_phone: formData.telefone,
        job_title: formData.cargo,
        tags: [formData.empresa],
      },
    };

    console.log("Dados enviados para conversão:", conversionBody);

    CreatingNewContact(conversionBody);
  };

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

          <form onSubmit={handleSubmit} className="space-y-2">
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

            <InputLabel
              sx={{ color: "#fff", mt: 2, fontWeight: "semibold" }}
              shrink={false}
              htmlFor={"cargo"}
            >
              Cargo *
            </InputLabel>
            <TextField
              sx={{ m: 0 }}
              id="cargo"
              variant="outlined"
              fullWidth
              name="cargo"
              value={formData.cargo}
              onChange={handleInputChange}
              required
              className="bg-white rounded"
              margin="normal"
            />

            <Box className="text-center mt-8">
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
