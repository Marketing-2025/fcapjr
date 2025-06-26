import { Box, Container, Paper, IconButton } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";

const VideoSection = () => {
  return (
    <Box className="hidden py-16 md:py-24" sx={{ bgcolor: "#ebecec" }}>
      <Container maxWidth="xl">
        <Box className="relative mx-auto" sx={{ maxWidth: "900px" }}>
          <Paper
            elevation={6}
            className="relative overflow-hidden"
            sx={{ aspectRatio: "16/9" }}
          >
            <Box
              className="absolute inset-0 flex items-center justify-center"
              sx={{ bgcolor: "grey.400" }}
            >
              <IconButton
                className="w-20 h-20 backdrop-blur-sm transition-all hover:scale-110"
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.3)",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.4)",
                  },
                }}
                aria-label="Play video"
              >
                <PlayArrow
                  fontSize="large"
                  sx={{ color: "white", fontSize: 40, ml: 1 }}
                />
              </IconButton>
            </Box>
          </Paper>

          {/* Decorative elements */}
          <Box
            className="absolute -left-5 -top-5 w-12 h-12"
            sx={{ bgcolor: "primary.main" }}
          />
          <Box
            className="absolute -right-5 -bottom-5 w-12 h-12"
            sx={{ bgcolor: "primary.dark" }}
          />
          <Box
            className="absolute left-20 bottom-0 w-8 h-8"
            sx={{ bgcolor: "primary.light" }}
          />
          <Box
            className="absolute right-20 top-0 w-8 h-8"
            sx={{ bgcolor: "primary.light" }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default VideoSection;
