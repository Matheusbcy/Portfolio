import About from "../components/About";
import MainHome from "../components/MainHome";
import Projetos from "../components/Projetos";
import Skills from "../components/Skills";
import { motion } from "framer-motion";

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MainHome />
      <About />
      <Skills />
      <Projetos />
    </motion.div>
  );
}
export default HomePage;
