import { Container } from "@mui/material";
import ContentSection from "../contentSection/ContentSection";
import SuccessCases from "../../sucess_cases/sucessCases/SucessCases";

function App() {
  return (
    <div className="min-h-screen bg-[#EBECEC]">
      {/* Success Cases Section */}
      <Container
        maxWidth="lg"
        className="py-16"
        sx={{
          color: "#004a8f",
          fontWeight: "semibold",
          mb: 4,
          paddingTop: { xs: "1.5rem", md: 0 },
          paddingBottom: { xs: 0, md: 0 }, // Reduz o padding top apenas no mobile
        }}
      >
        <SuccessCases />
      </Container>

      {/* Our Content Section */}
      {/* <ContentSection /> */}
    </div>
  );
}

export default App;
