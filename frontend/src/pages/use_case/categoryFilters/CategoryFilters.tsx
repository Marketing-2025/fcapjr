import { Button, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CategoryFilters = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 relative">
      <IconButton
        className="absolute left-0 text-blue-700 hover:text-blue-900"
        size="large"
      >
        <ArrowBackIcon fontSize="large" />
      </IconButton>

      <Button
        variant="outlined"
        sx={{
          borderColor: "#006EAD",
          color: "#006EAD",
          borderRadius: "5px",
          px: 3,
          textTransform: 'capitalize',
          fontFamily: "Montserrat",
        }}
      >
        Processos
      </Button>
      <Button
        variant="outlined"
        sx={{
          borderColor: "#006EAD",
          color: "#006EAD",
          borderRadius: "5px",
          px: 3,
          textTransform: 'capitalize',
          fontFamily: "Montserrat",
        }}
      >
        Marketing
      </Button>
      <Button
        variant="outlined"
        sx={{
          borderColor: "#006EAD",
          color: "#006EAD",
          borderRadius: "5px",
          px: 3,
          textTransform: 'capitalize',
          fontFamily: "Montserrat",
        }}
      >
        Otimizações
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#006EAD",
          borderRadius: "5px",
          textTransform: 'capitalize',
          fontFamily: "Montserrat",
          px: 3,
          "&:hover": { backgroundColor: "#0052a3" },
        }}
      >
        Pesquisa qualitativa
      </Button>
      <Button
        variant="outlined"
        sx={{
          borderColor: "#006EAD",
          color: "#006EAD",
          borderRadius: "5px",
          px: 3,
          textTransform: 'capitalize',
          fontFamily: "Montserrat",
        }}
      >
        Insumos coletados
      </Button>
      <Button
        variant="outlined"
        sx={{
          borderColor: "#006EAD",
          color: "#006EAD",
          borderRadius: "5px",
          px: 3,
          textTransform: 'capitalize',
          fontFamily: "Montserrat",
        }}
      >
        Focous group
      </Button>

      <IconButton
        className="absolute right-0 text-blue-700 hover:text-blue-900"
        size="large"
      >
        <ArrowForwardIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default CategoryFilters;
