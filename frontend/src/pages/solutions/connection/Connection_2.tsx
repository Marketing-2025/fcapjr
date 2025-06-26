import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import { ExecutionFramework } from "../executionFramework/ExecutionFramework";
import { Methodology } from "../methodology/Methodology";

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: "#0d3b69",
    },
    secondary: {
      main: "#0d5a94",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h3: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 600,
    },
  },
});

function Connection2() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="bg-[#f5f5f0] text-[#333]">
        <Methodology />
      </Box>
    </ThemeProvider>
  );
}

export default Connection2;
