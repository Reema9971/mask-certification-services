import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Objectives from "./components/Objectives";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ServiceDetail from "./components/ServiceDetail";
import ContactPage from "./pages/ContactPage";

function ScrollToHashElement() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return null;
}

function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Objectives />
        <Services />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}
