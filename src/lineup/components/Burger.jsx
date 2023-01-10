import React from "react";
import { motion, AnimatePresence } from "framer-motion";
function Burger() {
  return (
    // <AnimatePresence>
    <motion.div
      className="burgerMenu"
      key="burgier"
      initial={{ x: "-50vw" }}
      animate={{ x: 0 }}
      exit={{ x: "-300vw" }}
      transition={{ duration: 0.2, delay: 0 }}
    >
      <a href={`tickets`}>
        <button className="tickets"></button>
      </a>
      <a href={`/`}>
        <button className="homepage"> </button>
      </a>
    </motion.div>
    // </AnimatePresence>
  );
}

export default Burger;
