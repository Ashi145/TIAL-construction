import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Team from "./pages/Team";
import Capacity from "./pages/Capacity";
import HealthSafety from "./pages/HealthSafety";
import Credentials from "./pages/Credentials";
import Insights from "./pages/Insights";
import InsightDetail from "./pages/InsightDetail";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<SiteLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

function SiteLayout() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/team" element={<Team />} />
        <Route path="/capacity" element={<Capacity />} />
        <Route path="/health-safety" element={<HealthSafety />} />
        <Route path="/credentials" element={<Credentials />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:slug" element={<InsightDetail />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-of-use" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
