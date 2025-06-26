import type React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface SolutionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
}

export function SolutionCard({
  title,
  description,
  icon,
}: SolutionCardProps) {
  return (
    <Card
      className="bg-white shadow-md relative h-[250px] flex flex-col hover:!bg-gradient-to-r hover:from-[#005396] hover:to-[#006EAD] hover:!text-white transition-all duration-500"
      sx={{ borderRadius: 2 }}
    >
      <CardContent className="p-6">
        <Box className="flex items-start mb-4">
          <Box className="mr-4">{icon}</Box>
          <Typography variant="h5" component="h3" className="font-bold">
            {title}
          </Typography>
        </Box>
        <Typography variant="body1">{description}</Typography>
        <Box className="absolute bottom-4 right-4">
          <ArrowForwardIcon className="w-5 h-5" />
        </Box>
      </CardContent>
    </Card>
  );
}
