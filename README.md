# Desafio DEV LEGAL.AI - João Costa

## 💡 Desafio: Mini MVP de Match Inteligente

Este projeto foi desenvolvido como parte do processo seletivo para a vaga de Desenvolvedor(a) Full Stack na LEGAL.AI.

O objetivo era construir um MVP funcional de uma tela de matchmaking com "inteligência artificial simulada", que conectasse pessoas com base em afinidade.

---

## 🧠 Funcionalidades

- Formulário com:
  - Nome
  - Área de Interesse
  - Localização
- Botão **“Buscar Conexões”**
- Exibição de 3 perfis simulados com:
  - Nome
  - Descrição personalizada
  - Nível de afinidade (%)
- Histórico de buscas anteriores
- Validações com mensagens de erro
- Loading durante a requisição
- Layout 100% responsivo
- Animações com Framer Motion

---

## 🚀 Tecnologias Utilizadas

### Frontend

- React (Vite)
- Axios
- Styled Components
- Framer Motion

### Backend

- Node.js
- Express
- CORS

---

## 📦 Estrutura de Pastas

```
desafio-legalai/
├── backend/
│   └── routes/
│       └── matches.js
├── frontend/
│   ├── components/
│   ├── styles/
│   └── App.jsx
└── README.md
```

---

## ⚙️ Como Rodar o Projeto Localmente

### Pré-requisitos

- Node.js instalado (v18+)

### Backend

```bash
cd backend
npm install
node index.js
```

A API estará disponível em: `http://localhost:5000/api/matches`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

A aplicação abrirá em: `http://localhost:5173`

---

## 📌 Decisões de Implementação

- O projeto foi separado entre **frontend e backend** para simular uma estrutura real de MVP.
- A afinidade é **simulada via lógica mockada no backend**, respeitando o objetivo de não implementar IA real.
- O histórico foi armazenado no estado local (React) para exibir consultas anteriores.
- Utilizei o **Framer Motion** para animar a entrada dos cards.
- O layout foi feito pensando em **responsividade mobile-first**, com `flex`, `margin: auto`, `max-width` e `overflow`.

---

## ✅ Entregáveis

- [x] Tela responsiva com formulário
- [x] Conexões simuladas
- [x] Código organizado
- [x] README explicativo
- [x] Criatividade e atenção aos detalhes

---
