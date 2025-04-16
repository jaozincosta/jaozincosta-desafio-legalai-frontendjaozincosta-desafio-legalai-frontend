import React from "react";
import { motion } from "framer-motion";

function MatchCard({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: 12,
        padding: 20,
        marginBottom: 16,
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
      }}
    >
      <h3 style={{ fontSize: "1.1rem", marginBottom: 8 }}>{data.nome}</h3>
      <p style={{ fontSize: "0.95rem", marginBottom: 8 }}>{data.descricao}</p>
      <strong style={{ color: "#007bff" }}>Afinidade: {data.afinidade}%</strong>
    </motion.div>
  );
}

export default MatchCard;
