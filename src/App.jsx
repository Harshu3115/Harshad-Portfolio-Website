import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutPage from "./Pages/AboutPage";
import SkillsPage from "./Pages/SkillsPage";
import ProjectPage from "./Pages/ProjectPage";
import Experience from "./Pages/ExperiencePage";
import BackToTop from "./components/BackToTop";
import ExperiencePage from "./Pages/ExperiencePage";
import ContactPage from "./Pages/ContactPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route
          path="/experience"
          element={<ExperiencePage />}
        />
        <Route
          path="/contact"
          element={<ContactPage />}
        />
      </Routes>
      <BackToTop />
    
      
    </>
  );
}

export default App;