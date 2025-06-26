import type React from "react";
import { Box } from "@mui/material";

interface MethodologyPillarProps {
  title: string;
  imageUrl: string;
}

export const MethodologyPillar: React.FC<MethodologyPillarProps> = ({
  title,
  imageUrl,
}) => {
  return (
    <Box className="relative group overflow-hidden h-full">
      <img
        src={imageUrl || "https://placehold.co/200x450/0d5a94/FFFFFF"}
        alt={title}
        className="w-full h-full object-cover brightness-75 group-hover:brightness-90 transition-all"
      />
      <Box className="absolute bottom-0 w-full bg-[#0d5a94] p-4 text-white text-center font-bold">
        {title}
      </Box>
    </Box>
  );
};
