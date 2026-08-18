import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/projects/ProjectDetail";
import ScrollToTop from "./components/layout/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/projects"
            element={<Projects />}
          />

          <Route
            path="/projects/:slug"
            element={<ProjectDetail />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;