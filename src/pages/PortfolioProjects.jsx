import { motion } from "framer-motion";
import AllProjects from "../components/AllProjects";

function Projetos() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AllProjects />
    </motion.div>
  );
}

export default Projetos;
