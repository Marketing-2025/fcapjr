import * as React from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
// import Business from "../../pages/solutions/businessChallSection/businessChallSection";

function ServiceCategories({
  tab1,
  tab2,
  tab3,
  tab4,
  tab5,
  tab6,
  setTitle,
  defaultTab,
}) {
  const [value, setValue] = React.useState(defaultTab);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTitle(newValue);
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f0",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        
      }}
    >
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            width: "100vw",
            position: "relative",
            left: "50%",
            right: "50%",
            marginLeft: "-50vw",
            marginRight: "-50vw",
            backgroundColor: "#f5f5f0",
            overflowX: "auto", 
          }}
        >
          <TabList
            onChange={handleChange}
            aria-label="Categoria de Serviços"
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              maxWidth: "1200px",
              margin: "0 auto",
              overflowX: "auto", // permite rolagem horizontal no TabList
              whiteSpace: "nowrap", // impede quebra de linha dos tabs
            }}
          >
            <Tab label="MAPEAMENTO DE PROCESSOS" value="1" />
            <Tab label="GESTÃO ESTRATÉGICA" value="2" />
            <Tab label="MARKETING E VENDAS" value="3" />
            <Tab label="PLANO DE NEGÓCIOS" value="4" />
            <Tab label="PESQUISA DE MERCADO" value="5" />
            <Tab label="GESTÃO DE PESSOAS" value="6" />
          </TabList>
        </Box>
        <TabPanel value="1">{tab1}</TabPanel>
        <TabPanel value="2">{tab2}</TabPanel>
        <TabPanel value="3">{tab3}</TabPanel>
        <TabPanel value="4">{tab4}</TabPanel>
        <TabPanel value="5">{tab5}</TabPanel>
        <TabPanel value="6">{tab6}</TabPanel>
      </TabContext>
    </Box>
  );
}

export default ServiceCategories;
