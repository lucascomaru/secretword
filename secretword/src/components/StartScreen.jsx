import './StartScreen.css';

const StartScreen = ({ startGame }) => {
  return (
    <div className='start-screen'>
      <h1 className='start-title'>Secret Word</h1>
      <p className='start-description'>Clique no botão abaixo para jogar!</p>
      <button className='start-button' onClick={startGame}>
        Jogar!!
      </button>
    </div>
  );
};

export default StartScreen;
