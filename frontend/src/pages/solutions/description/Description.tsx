import type React from "react";
import { Typography, Box } from "@mui/material";

interface DescriptionProps {
  children: React.ReactNode;
}

export const Description: React.FC<DescriptionProps> = ({ children }) => {
  return (
    <Box className="max-w-3xl mx-auto text-center mb-12">
      <Typography className="mb-2">{children}</Typography>
    </Box>
  );
};
