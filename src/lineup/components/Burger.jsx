import React from "react";
import { motion, AnimatePresence } from "framer-motion";
function Burger() {
  return (
    <motion.div
      className="burgerMenu"
      key="burgier"
      initial={{ x: "-40vw", y: -500, scale: 0.1 }}
      animate={{ x: 0, y: 0, scale: 1 }}
      exit={{ x: "-300vw", y: 500, scale: 0.1 }}
      transition={{ duration: 0.1 }}
    >
      <a href={`tickets`}>
        <button className="tickets"></button>
      </a>
      <a href={`/`}>
        <button className="homepage"> </button>
      </a>
    </motion.div>
  );
}

export default Burger;
