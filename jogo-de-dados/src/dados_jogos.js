import React, { useState } from 'react';
import './dados_jogos.css';
import imagemHeader from './imagemcomdados2.png';

const DadosJogos = () => {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [wins, setWins] = useState(0);
  const [plays, setPlays] = useState(0);

  const rollDice = () => {
    const newDice1 = Math.floor(Math.random() * 6) + 1;
    const newDice2 = Math.floor(Math.random() * 6) + 1;
    setDice1(newDice1);
    setDice2(newDice2);
    setPlays(plays + 1);
    if (newDice1 + newDice2 === 7 || newDice1 + newDice2 === 11) {
      setWins(wins + 1);
    }
  };

  const winPercentage = plays === 0 ? 0 : ((wins / plays) * 100).toFixed(2);

  return (
    <div className="dados-jogos">
      <header>
        <img src={imagemHeader} alt="Header" className="imagem-header" />
      </header>
      <h1>Jogo de Dados</h1>
      <div>
        <span className="dice">Dado 1: {dice1}</span>
        <span className="dice">Dado 2: {dice2}</span>
      </div>
      <button onClick={rollDice}>Jogar</button>
      <p>{dice1 + dice2 === 7 || dice1 + dice2 === 11 ? 'UAU! Você ganhou!' : 'Tente novamente!'}</p>
      <hr></hr>
      <p>Vitórias: {wins}</p>
      <p>Total de Jogadas: {plays}</p>
      <p>Seu percentual de vitórias é: {winPercentage}%</p>
    </div>
  );
};

export default DadosJogos;
