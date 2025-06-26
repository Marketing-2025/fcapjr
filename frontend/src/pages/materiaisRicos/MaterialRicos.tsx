import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SuccessCases from "../sucess_cases/SucessCases";
import SolutionsPage from "./pages/SolutionsPage";
import ContentPage from "./pages/ContentPage";
import UpePage from "./pages/UpePage";
import SchedulePage from "./pages/SchedulePage";

function MaterialRicos() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre-nos" element={<AboutPage />} />
        <Route path="/cases-de-sucesso" element={<SuccessCases />} />
        <Route path="/solucoes" element={<SolutionsPage />} />
        <Route path="/conteudos" element={<ContentPage />} />
        <Route path="/upe-destaca" element={<UpePage />} />
        <Route path="/agendar" element={<SchedulePage />} />
      </Routes>
    </Router>
  );
}

export default MaterialRicos;
