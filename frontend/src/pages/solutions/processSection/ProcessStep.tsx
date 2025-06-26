import type React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

interface ProcessStepProps {
  number?: number;
  title: string;
  description: string;
  position?: "left" | "right" | "center";
  centered?: boolean; // Adicione esta linha
}

export const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  description,
  centered = false, // Valor padrão
}) => {
  return (
    <Card className="shadow-md h-full">
      <CardContent className="p-6 flex flex-row items-center space-x-4">
        {number && (
          <Typography
            variant="h2"
            className="text-[#0d5a94] font-bold"
            sx={{
              minWidth: "2.5rem",
              textAlign: "left",
              marginRight: "1.2rem",
              fontSize: { xs: "3rem", md: "3.8rem" }, // Fonte ainda maior para o número
            }}
          >
            {number}
          </Typography>
        )}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h5"
            className="font-bold mb-3"
            sx={{
              textAlign: centered ? "center" : "left",
              fontSize: { xs: "1rem", md: "1.1rem" }, // Fonte menor para o título
            }}
          >
            {title}
          </Typography>
          <Typography
            className="text-gray-700"
            sx={{
              textAlign: centered ? "center" : "left",
              fontSize: { xs: "0.85rem", md: "0.95rem" }, // Fonte menor para a descrição
            }}
          >
            {description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
