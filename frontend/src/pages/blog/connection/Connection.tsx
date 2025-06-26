import { useState } from "react";
import { useMediaQuery, List, ListItem, ListItemText } from "@mui/material";
import BlogHeader from "../blogHeader/BlogHeader";
import BlogList from "../blogList/BlogList";
// import Navbar from "../../../components/NavBar/Navbar";

function Connection() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:960px)");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    "Home",
    "Sobre nós",
    "Cases de Sucesso",
    "Soluções",
    "Conteúdos",
    "UPE DESTACA",
  ];

  const drawer = (
    <div className="p-4">
      <List>
        {menuItems.map((item) => (
          <ListItem component="button" key={item}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f5f2e8]">
      <BlogHeader />
      <BlogList />
    </div>
  );
}

export default Connection;
