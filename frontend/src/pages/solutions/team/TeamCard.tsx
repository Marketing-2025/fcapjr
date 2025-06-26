import type React from "react";
import { Grid, Box, Typography } from "@mui/material";

interface TeamCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight?: boolean;
}

const TeamCard = ({
  icon,
  title,
  description,
  highlight = false,
}: TeamCardProps) => {
  return (
    <Grid item xs={12} md={3}>
      <Box
        className={`p-4 flex flex-col items-center text-center ${
          highlight ? "border-2 border-blue-700 shadow-lg" : ""
        }`}
      >
        <Box className="bg-gray-200 p-4 mb-4 rounded-md">{icon}</Box>
        <Typography variant="h6" className="font-bold mb-2">
          {title}
        </Typography>
        <Typography className="text-gray-700">{description}</Typography>
      </Box>
    </Grid>
  );
};

export default TeamCard;
