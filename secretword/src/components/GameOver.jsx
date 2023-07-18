import React from 'react';
import './GameOver.css';

const GameOver = ({ retry, score }) => {
  return (
    <div className='game-over'>
      <h1 className='game-over-title'>Fim de jogo!</h1>
      <h2 className='game-over-score'>A sua pontuação foi: <span>{score}</span></h2>
      <button className='game-over-button' onClick={retry}>
        Resetar Jogo
      </button>
    </div>
  );
};

export default GameOver;
