import { SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logos/fecap.png";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const scrollToHomeForm = () => {
    navigate("/#form-contato-home");
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Sobre nós", path: "/sobre-nos" },
    { name: "Soluções", path: "/solucoes" },
    { name: "Cases de Sucesso", path: "/cases-de-sucesso" },
    // { name: "Conteúdos", path: "/conteudos" },
    { name: "UPE DESTACA", path: "/upe-destaca" },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "#004a8f", left: 0 }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <a href="/" style={{ textDecoration: "none", color: "white" }}>
            <img className="w-36" src={logo} alt="" />
          </a>

          {!isMobile && (
            <Box sx={{ display: "flex", gap: 3 }}>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Box sx={{ "&:hover": { color: "#e0e0e0" } }}>
                    {item.name}
                  </Box>
                </a>
              ))}
            </Box>
          )}

          <Box>
            {!isMobile ? (
              <Button
                variant="contained"
                onClick={scrollToHomeForm}
                sx={{
                  backgroundColor: "#253c59",
                  "&:hover": {
                    backgroundColor: "#1c2c42",
                  },
                  color: "white",
                }}
              >
                AGENDAR REUNIÃO
              </Button>
            ) : (
              <>
                <IconButton
                  size="large"
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  {navItems.map((item) => (
                    <MenuItem
                      key={item.name}
                      onClick={handleClose}
                      component="a"
                      href={item.path}
                    >
                      {item.name}
                    </MenuItem>
                  ))}
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      scrollToHomeForm();
                    }}
                  >
                    AGENDAR REUNIÃO
                  </MenuItem>
                </Menu>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
