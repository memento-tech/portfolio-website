import { HashRouter, Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import FullContainer from "./components/FullContainer";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ContactUsPage from "./pages/ContactUsPage";
import ProjectsPage from "./pages/ProjectsPage";
import TechHubPage from "./pages/TechHubPage";
import DocumentationPage from "./pages/DocumentationPage";
import ScrollToTop from "./components/ScrollToTop";
import projectsData from "./data/projectsData";
import techBlogs from "./data/techBlogs";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <FullContainer>
      <HashRouter>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route
            path="/about.md"
            element={<a href="/about.md">View Markdown</a>}
          />
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/tech-hub" element={<TechHubPage />} />
          <Route
            path="/projects/documentation"
            element={
              <DocumentationPage
                isProjects={true}
                documentations={projectsData}
              />
            }
          />
          <Route
            path="/tech-hub/documentation"
            element={
              <DocumentationPage
                isProjects={false}
                documentations={techBlogs}
              />
            }
          />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </FullContainer>
  );
}

export default App;
