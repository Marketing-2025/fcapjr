import { Box, Typography } from "@mui/material";
import materialBg from "../../../assets/imagens/materialBg.png";

function HeroSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#0a4c8a",
        backgroundImage: `URL(${materialBg})`,
        backgroundSize: "cover",
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
        color: "white",
        position: "relative",
        height: "35vh",
        py: 12,
      }}
    >
      <div className="container mx-auto px-4 flex items-center">
        <div className="ml-[40%] w-1/2 text-left text">
          <Typography variant="h3" component="h1" className="font-bold">
            MATERIAIS
            <br />
            RICOS
          </Typography>
        </div>
      </div>
    </Box>
  );
}

export default HeroSection;
