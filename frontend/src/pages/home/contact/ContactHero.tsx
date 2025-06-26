import { Box } from "@mui/material";
import formBg from "../../../assets/imagens/homeFormBg.png";

export function HeroSectionContact() {
  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #f3f4f6, #e5e7eb)",
        display: "flex",
        ml: { sm: 0, md: 0, lg: -12, xl: 0 },
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        width: { xs: "100%", md: "74%", lg: "59%", xl: "90%" },
        maxWidth: { xs: "100%", md: "700px" },
        height: "100%",
        maxHeight: "100%",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${formBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: { xs: "center", md: "left" },
          width: "100%",
          height: { xs: "0", md: "80vh", lg: "100vh" },
        }}
        className="relative z-40"
      >
        {/* Conteúdo opcional */}
      </Box>
    </Box>
  );
}
