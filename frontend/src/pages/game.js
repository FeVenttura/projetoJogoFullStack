import React, { useState, useEffect } from 'react';
import './Game.css';

const itensPossiveis = ['Livro', 'Computador', 'Café', 'Caderno', 'Certificado'];

const Game = () => {
  const [pontos, setPontos] = useState(0);
  const [itens, setItens] = useState([]);

  useEffect(() => {
    // Carrega do localStorage ao iniciar
    const dadosSalvos = JSON.parse(localStorage.getItem('progresso'));
    if (dadosSalvos) {
      setPontos(dadosSalvos.pontos || 0);
      setItens(dadosSalvos.itens || []);
    }
  }, []);

  useEffect(() => {
    // Salva progresso
    localStorage.setItem('progresso', JSON.stringify({ pontos, itens }));
  }, [pontos, itens]);

  const coletar = () => {
    const pontoAleatorio = Math.floor(Math.random() * 10) + 1;
    const itemAleatorio = itensPossiveis[Math.floor(Math.random() * itensPossiveis.length)];

    setPontos(prev => prev + pontoAleatorio);
    setItens(prev => [...prev, itemAleatorio]);
  };

  return (
    <div className="game-container">
      <h1>🏫 Jogo SENAC</h1>
      <p>Pontuação: <strong>{pontos}</strong></p>

      <button onClick={coletar}>Coletar Recompensa</button>

      <h2>🎒 Itens Coletados</h2>
      <ul>
        {itens.map((item, index) => (
          <li key={index}>✅ {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Game;
