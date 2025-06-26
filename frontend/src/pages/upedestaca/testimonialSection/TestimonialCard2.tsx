import { Paper, Typography, Avatar, Box } from "@mui/material";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  imageSrc?: string;
}

export function TestimonialCard2({
  name,
  role,
  company,
  testimonial,
  imageSrc = "/placeholder.svg",
}: TestimonialCardProps) {
  return (
    <Paper elevation={2} className="p-6">
      <Box className="flex items-center mb-4">
        <Avatar sx={{ width: 64, height: 64, marginRight: 2 }} src={imageSrc} />
        <Box>
          <Typography
            variant="h6"
            className="font-bold text-[#1a1a6c]"
            sx={{ fontWeight: "bold", color: "#1a1a6c" }}
          >
            {name}
          </Typography>
          <Typography variant="body2">
            {role}
            <br />
            {company}
          </Typography>
        </Box>
      </Box>
      <Typography variant="body1" className="italic">
        "{testimonial}"
      </Typography>
    </Paper>
  );
}
