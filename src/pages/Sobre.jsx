import AboutMore from "../components/AboutMore";
import ExperienceAbout from "../components/ExperienceAbout";
import Formacao from "../components/Formacao";
import MyStory from "../components/MyStory";
import { motion } from "framer-motion";

function Sobre() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AboutMore />
      <MyStory />
      <ExperienceAbout />
      <Formacao />
    </motion.div>
  );
}

export default Sobre;
