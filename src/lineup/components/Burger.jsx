import React from "react";
import { motion } from "framer-motion";
function Burger() {
  return (
    <motion.div
      className="burgerMenu"
      key="burgier"
      initial={{ x: "-40vw" }}
      animate={{ x: 0 }}
      exit={{ x: "-300vw" }}
      transition={{ duration: 0 }}
    >
      <a href={`tickets`}>
        <button className="tickets">{""}</button>
      </a>
      <a href={`/`}>
        <button className="homepage">{""}</button>
      </a>
    </motion.div>
  );
}

export default Burger;
