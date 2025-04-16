import React, { useState } from "react";
import axios from "axios";
import Form from "./components/Form";
import MatchCard from "./components/MatchCard";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");
  const [historico, setHistorico] = useState([]);

  const handleSearch = async (formData) => {
    const { nome, area, localizacao } = formData;

    if (!nome || !area || !localizacao) {
      setErro("Preencha todos os campos antes de buscar.");
      return;
    }

    try {
      setErro("");
      setLoading(true);
      const response = await axios.post(
        "http://localhost:5000/api/matches",
        formData
      );
      setMatches(response.data);
      setHistorico((prev) => [...prev, formData]);
    } catch (error) {
      console.error(error);
      setErro("Erro ao buscar conexões. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <GlobalStyle />
      <div
        style={{
          background: "#f5f7fa",
          minHeight: "100vh",
          padding: "40px 16px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "600px",
            background: "#fff",
            borderRadius: "12px",
            padding: "32px 24px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            margin: "auto",
          }}
        >
          <h1>Match Inteligente LEGAL.AI</h1>

          <Form onSubmit={handleSearch} />

          {erro && <p style={{ color: "red", marginTop: -8 }}>{erro}</p>}
          {loading && <p style={{ color: "#555" }}>Carregando conexões...</p>}

          {matches.length > 0 && (
            <div>
              <h2>Resultados</h2>
              {matches.map((match, index) => (
                <MatchCard key={index} data={match} />
              ))}
            </div>
          )}

          {historico.length > 0 && (
            <div>
              <h3>Buscas anteriores</h3>
              <ul style={{ paddingLeft: 16 }}>
                {historico.map((item, i) => (
                  <li key={i} style={{ fontSize: "0.9rem", color: "#444" }}>
                    {item.nome} - {item.area} ({item.localizacao})
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
