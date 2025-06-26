import type React from "react";
import { Typography } from "@mui/material";

interface SectionTitleProps {
  children: React.ReactNode;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <Typography
      variant="h3"
      className="text-[#0d5a94] text-center font-bold mb-6"
    >
      {children}
    </Typography>
  );
};
