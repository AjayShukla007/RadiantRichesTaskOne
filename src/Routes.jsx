import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const LoadedPage = React.lazy(() => import("pages/index"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<LoadedPage />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
