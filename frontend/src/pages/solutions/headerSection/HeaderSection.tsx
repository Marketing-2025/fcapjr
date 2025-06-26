import type React from "react";

import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  useMediaQuery,
  useTheme,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// Importe a imagem do logo se disponível
// import logoImage from '../assets/logo.png';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { text: "Home", href: "#" },
    { text: "Sobre nós", href: "#" },
    { text: "Cases de Sucesso", href: "#" },
    { text: "Soluções", href: "#" },
    { text: "Conteúdos", href: "#" },
    { text: "UPE DESTACA", href: "#" },
  ];

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#0e5288" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
          maxWidth: 1200,
          mx: "auto",
          width: "100%",
        }}
      >
        <a href="#" style={{ flexShrink: 0 }}>
          {/* Use uma imagem temporária ou a logo real se disponível */}
          <img
            src="https://via.placeholder.com/120x40"
            alt="FCAP Jr Logo"
            style={{ height: 40, width: "auto" }}
          />
        </a>

        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <List>
                  {menuItems.map((item) => (
                    <ListItem key={item.text} component="a" href={item.href}>
                      <ListItemText primary={item.text} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box
            component="nav"
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 3,
            }}
          >
            {menuItems.map((item) => (
              <a
                key={item.text}
                href={item.href}
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  transition: "color 0.2s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#bbdefb")}
                onMouseOut={(e) => (e.currentTarget.style.color = "white")}
              >
                {item.text}
              </a>
            ))}
          </Box>
        )}

        <Button
          variant="contained"
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
      </Toolbar>
    </AppBar>
  );
};

export default Header;
