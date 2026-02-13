import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WhatsAppCTA } from "./components/WhatsAppCTA";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ServicesPage } from "./pages/ServicesPage";
import { EnquiryPage } from "./pages/EnquiryPage";

export function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/enquiry" element={<EnquiryPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppCTA />
      </div>
    </Router>
  );
}
