import type React from "react";
import { Box } from "@mui/material";

export const ProcessStepConnector: React.FC = () => {
  return (
    <>
      <Box className="hidden md:block absolute w-14 h-20 border-l-2 border-b-2 border-[#0d5a94] left-1/4 -top-12 transform rotate-45"></Box>
      <Box className="hidden md:block absolute w-14 h-20 border-r-2 border-b-2 border-[#0d5a94] right-1/4 -top-12 transform -rotate-45"></Box>
    </>
  );
};
