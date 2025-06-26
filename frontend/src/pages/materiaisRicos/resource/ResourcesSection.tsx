import { Box, Grid, Typography } from "@mui/material";
import ResourceCard from "../resource/ResourcesCard";

function ResourcesSection() {
  const resources = [
    {
      type: "E-BOOK",
      title: "Como mapear processos",
      imageUrl: "../../assets/imagens/resource1.jpg",
      downloadUrl: "/downloads/como-mapear-processos",
      showDownloadButton: true,
    },
    {
      type: "INFOGRÁFICO",
      title: "Benefícios garantidos pelo mapeamento de processos",
      imageUrl: "/images/resource2.jpg",
      downloadUrl: "/downloads/beneficios-mapeamento",

    },
    {
      type: "E-BOOK",
      title: "As 4 principais ferramentas do RH",
      imageUrl: "/images/resource3.jpg",
      downloadUrl: "/downloads/ferramentas-rh",

    },
    {
      type: "E-BOOK",
      title: "Mapeamento de processos para hospitais",
      imageUrl: "/images/resource4.jpg",
      downloadUrl: "/downloads/mapeamento-hospitais",

    },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: "#f5f5f5" }}>
      <Typography sx={{ mx: 'auto', my: 2, pb: 5 }} className="flex-grow text-center w-72 text-[#005396]">
      Acesse aqui ebook, planilhas e infográficos que irão contribuir para o crescimento da sua empresa
        </Typography>
      <div className="mx-auto px-4">
        <div className="mx-auto px-4 flex flex-col max-w-[500px] gap-6 lg:flex-row lg:max-w-[1200px]">
          {resources.map((resource, index) => (
            <Grid sx={{ m: 'auto', width: '75%', height: '380px', }} item xs={12} sm={6} md={3} key={index}>
              <ResourceCard
                type={resource.type as "E-BOOK" | "INFOGRÁFICO"}
                title={resource.title}
                imageUrl={resource.imageUrl}
                downloadUrl={resource.downloadUrl}
                showDownloadButton={resource.showDownloadButton}
              />
            </Grid>
          ))}
        </div>
      </div>
    </Box>
  );
}

export default ResourcesSection;
