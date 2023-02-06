import { Route, Routes, useLocation } from "react-router-dom";
import Contato from "../../pages/Contato";
import HomePage from "../../pages/HomePage";
import Sobre from "../../pages/Sobre";
import PortfolioProjects from "../../pages/PortfolioProjects";

import { AnimatePresence } from "framer-motion";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { useEffect } from "react";

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      <NavBar />
      <Routes location={location} key={location.pathname}>
        <Route key={1} index element={<HomePage />} />
        <Route key={2} path={"/about"} element={<Sobre />} />
        <Route key={3} path={"/projects"} element={<PortfolioProjects />} />
        <Route key={4} path={"/contact"} element={<Contato />} />
      </Routes>
      <Footer />
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
