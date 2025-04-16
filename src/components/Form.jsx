import React, { useState } from "react";

function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    nome: "",
    area: "",
    localizacao: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: 16 }}
    >
      <input
        name="nome"
        placeholder="Seu nome"
        value={formData.nome}
        onChange={handleChange}
        required
      />
      <input
        name="area"
        placeholder="Área de interesse"
        value={formData.area}
        onChange={handleChange}
        required
      />
      <input
        name="localizacao"
        placeholder="Localização"
        value={formData.localizacao}
        onChange={handleChange}
        required
      />
      <button type="submit">Buscar Conexões</button>
    </form>
  );
}

export default Form;
