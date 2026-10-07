import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import ProjectDetails from "@pages/ProjectDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:slug" element={<ProjectDetails />} />
    </Routes>
  );
};

export default AppRoutes;
