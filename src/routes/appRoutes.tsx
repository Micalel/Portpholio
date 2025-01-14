import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContent from "../components/Main/mainContent";
import ProjectPage from "../components/Main/project/ProjectDetails.tsx";
import NotFound from "../components/notFound/notFound";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
