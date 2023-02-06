import ContatoComp from "../components/Contato";
import { motion } from "framer-motion";

function Contato() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ContatoComp />
    </motion.div>
  );
}

export default Contato;
