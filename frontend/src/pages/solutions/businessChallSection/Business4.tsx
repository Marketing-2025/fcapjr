import { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Box,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Link,
  Grid,
  Paper,
  Stack,
} from "@mui/material";
import {
  ICreateContactResponse,
  useCreateNewContact,
} from "../../../hooks/useCreateContact";
import toast from "react-hot-toast";
import rectangle from "../../../assets/imagens/rectangle-form.png";
import backgroundForm from "../../../assets/imagens/solutions-form.png";

const BusinessTab4 = () => {
  const challenges = [
    {
      title: "Inviabilidade financeira",
      description: "para abertura de um negócio",
    },
    {
      title: "Desafios para planejar",
      description: "e iniciar novos empreendimentos",
    },
    {
      title: "Incertezas",
      description: "sobre a demanda do mercado",
    },
  ];

  return (
    <Stack spacing={4}>
      {challenges.map((challenge, index) => (
        <Paper
          key={index}
          elevation={3}
          sx={{
            backgroundImage: `url(${rectangle})`, // URL da imagem de fundo
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            color: "white",
            padding: 6, // Aumenta o espaçamento interno
            borderRadius: 2,
            textAlign: "center",
            width: "100%", // Garante que ocupe toda a largura disponível
            height: "25vh", // Aumenta a altura dos quadrados
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", // Centraliza verticalmente o conteúdo
            alignItems: "center", // Centraliza horizontalmente o conteúdo
          }}
        >
          <Typography
            variant="h5"
            component="h3"
            fontWeight="bold"
            sx={{ fontSize: "1.5rem" }} // Aumenta o tamanho da fonte do título
          >
            {challenge.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "1.3rem" }} // Aumenta o tamanho da fonte da descrição
          >
            {challenge.description}
          </Typography>
        </Paper>
      ))}
    </Stack>
  );
};

function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    celular: "",
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
    },
    onError: (error: any) => {
      console.error("Error creating contact: ", error);
      toast.error(
        "Erro ao criar contato. " +
          (error.response?.data?.errors?.error_message || error.message)
      );
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const conversionBody = {
      event_type: "CONVERSION",
      event_family: "CDP",
      payload: {
        conversion_identifier: "contato_gerado",
        email: formData.email,
        name: formData.nome,
        personal_phone: formData.celular,
        job_title: formData.cargo,
        tags: [formData.empresa, formData.setor],
      },
    };

    console.log("Dados enviados para conversão:", conversionBody);

    CreatingNewContact(conversionBody);
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: { target: { name: any; checked: any } }) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };

  if (submitted) {
    return (
      <Box sx={{ textAlign: "center", py: 4 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Obrigado!
        </Typography>
        <Typography>Seu e-book foi enviado para o email cadastrado.</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        m: "auto",
        display: "flex", // Define o contêiner como flexbox
        justifyContent: "center", // Centraliza horizontalmente
        alignItems: "center", // Centraliza verticalmente
        backgroundImage: `url(${backgroundForm})`, // URL da imagem de fundo
        backgroundSize: "cover",
        py: 4,
        px: 2,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid container spacing={6} alignItems="center" justifyContent="center">
        {/* Business Challenges Section */}
        <Grid item xs={12} md={6}>
          <BusinessTab4 />
        </Grid>

        {/* Contact Form Section */}
        <Grid item xs={12} md={6}>
          <Box
            component="form"
            id="form-contato-business" // Adiciona o id aqui
            onSubmit={handleSubmit}
            sx={{
              py: 4,
              px: 4,
              backgroundImage: `url(${backgroundForm})`, // URL da imagem de fundo
              borderRadius: 2,
              boxShadow: 3,
              maxWidth: "500px", // Define uma largura máxima para o formulário
              margin: "0 auto", // Centraliza horizontalmente
              border: "1px", // Remove as bordas
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              align="center"
              sx={{ color: "#004a8f", mb: 3 }}
            >
              FALE CONOSCO
            </Typography>

            <InputLabel
              htmlFor="nome-label"
              sx={{ color: "#005396", fontWeight: "bold" }}
            >
              Nome
            </InputLabel>
            <TextField
              fullWidth
              id="nome-label"
              name="nome"
              required
              margin="dense"
              value={formData.nome}
              onChange={handleChange}
              sx={{ backgroundColor: "#fff", borderRadius: 1 }}
            />

            <InputLabel
              htmlFor="email-label"
              sx={{ color: "#005396", fontWeight: "bold", mt: 2 }}
            >
              E-mail
            </InputLabel>
            <TextField
              fullWidth
              id="email-label"
              name="email"
              type="email"
              required
              margin="dense"
              value={formData.email}
              onChange={handleChange}
              sx={{ backgroundColor: "#fff", borderRadius: 1 }}
            />

            <InputLabel
              htmlFor="celular-label"
              sx={{ color: "#005396", fontWeight: "bold", mt: 2 }}
            >
              Celular
            </InputLabel>
            <TextField
              fullWidth
              id="celular-label"
              name="celular"
              required
              margin="dense"
              value={formData.celular}
              onChange={handleChange}
              sx={{ backgroundColor: "#fff", borderRadius: 1 }}
            />

            <InputLabel
              htmlFor="empresa-label"
              sx={{ color: "#005396", fontWeight: "bold", mt: 2 }}
            >
              Empresa
            </InputLabel>
            <TextField
              fullWidth
              id="empresa-label"
              name="empresa"
              required
              margin="dense"
              value={formData.empresa}
              onChange={handleChange}
              sx={{ backgroundColor: "#fff", borderRadius: 1 }}
            />

            <FormControl fullWidth margin="normal">
              <InputLabel
                variant="standard"
                htmlFor="setor-label"
                sx={{
                  position: "static",
                  transform: "none",
                  mb: 1,
                  color: "#005396",
                  fontWeight: "bold",
                }}
              >
                Setor da empresa
              </InputLabel>
              <Select
                labelId="setor-label"
                id="setor-label"
                name="setor"
                margin="dense"
                value={formData.setor}
                onChange={handleChange}
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
                  mb: 1,
                  color: "#005396",
                  fontWeight: "bold",
                }}
              >
                Cargo
              </InputLabel>
              <Select
                labelId="cargo-label"
                id="cargo-label"
                name="cargo"
                margin="dense"
                value={formData.cargo}
                onChange={handleChange}
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
                    color: "#004a8f",
                    "&.Mui-checked": {
                      color: "#004a8f",
                    },
                  }}
                />
              }
              label={
                <Typography
                  variant="body3"
                  sx={{ fontSize: "0.8em", color: "#1D2E5E" }}
                >
                  Eu li e concordo com a{" "}
                  <Link
                    href="/politica-de-privacidade"
                    sx={{ color: "#004a8f" }}
                  >
                    política de privacidade
                  </Link>
                </Typography>
              }
              sx={{ mt: 2 }}
            />

            <Box sx={{ textAlign: "center", mt: 2 }}>
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
                disabled={isLoading}
              >
                Solicitar agora
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactForm;
