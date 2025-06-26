import {
  Button,
  TextField,
  Card,
  CardContent,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchFilter = () => {
  return (
    <Card className="pt-1">
      <CardContent className="flex flex-col md:flex-row justify-between items-center p-0">
        <div className="flex gap-3 mb-4 md:mb-0">
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#006EAD",
              color: "#fff",
              borderRadius: "4px",
              px: 3,
              textTransform: 'capitalize',
              fontFamily: "Montserrat",
              fontWeight: 'normal'
            }}
          >
            Pesquisa qualitativa
          </Button>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#006EAD",
              color: "#fff",
              borderRadius: "4px",
              px: 3,
              textTransform: 'capitalize',
              fontFamily: "Montserrat",
              fontWeight: 'normal' 
            }}
          >
            Focous group
          </Button>
        </div>
        <TextField
          placeholder="Buscar"
          variant="outlined"
          size="small"
          className="w-full md:w-64"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </CardContent>
    </Card>
  );
};

export default SearchFilter;
