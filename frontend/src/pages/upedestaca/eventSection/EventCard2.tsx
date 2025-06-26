import type React from "react";
import { Button, Paper, Typography, Box } from "@mui/material";

interface EventCardProps {
  title: string;
  children: React.ReactNode;
}

export function EventCard2({ title, children }: EventCardProps) {
  return (
    <Box className="flex flex-col items-center">
      <Button
        variant="contained"
        className="mb-4 rounded-full"
        sx={{
          backgroundColor: "#1a1a6c",
          borderRadius: "9999px",
          "&:hover": { backgroundColor: "#141456" },
        }}
      >
        {title}
      </Button>
      <Paper elevation={2} className="p-6 h-full w-full">
        <Typography align="center">{children}</Typography>
      </Paper>
    </Box>
  );
}
