import type React from "react";
import { Button, Box } from "@mui/material";

interface PlanButtonProps {
  text: string;
}

export const PlanButton: React.FC<PlanButtonProps> = ({ text }) => {
  return (
    <Box className="relative flex justify-center mb-16">
      <Box className="absolute -top-8 -left-8 w-4 h-4 bg-[#6e95c1]"></Box>
      <Box className="absolute -top-16 -left-16 w-6 h-6 bg-[#0d5a94]"></Box>
      <Box className="absolute -bottom-12 -right-12 w-5 h-5 bg-[#6e95c1]"></Box>
      <Box className="absolute -bottom-6 -right-6 w-3 h-3 bg-[#0d5a94]"></Box>
      <Button
        variant="contained"
        className="bg-[#0d3b69] hover:bg-[#0d5a94] text-white py-6 px-8 text-lg font-medium rounded"
      >
        {text}
      </Button>
    </Box>
  );
};
