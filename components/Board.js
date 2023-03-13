import { useState, useEffect } from 'react';
import CharacterPanel from './CharacterPanel';
import PlayerCharacter from './PlayerCharacter';
import History from './History';
import { CharacterNames, Pictures, StartingBoard } from './constants';
import useInterval from './useInterval';

const Board = () => {
  const [playerName, setPlayerName] = useState(CharacterNames[Math.floor(Math.random()*CharacterNames.length)]);
  const [playerMap, setPlayerMap] = useState(StartingBoard);
  const timer = QuestionTimer();
  const [toggledPlayers, setToggledPlayers] = useState([]);
  const [toggledArray, setToggledArray] = useState([]);
  const [remainingTime, setRemainingTime] = useState(-1);

  useInterval(() => {
    if (remainingTime > 0) {
      setRemainingTime(remainingTime - 1);
    } else if (remainingTime === 0) {
      if (toggledPlayers.length) {
        setToggledArray([toggledPlayers].concat(toggledArray));
        setToggledPlayers([]);
      }
      setRemainingTime(-1);
    }
  }, 1000);

  const resetGame = () => {
    setNewPlayer();
    setPlayerMap(StartingBoard);
    setToggledPlayers([]);
    setToggledArray([]);
  }

  const togglePlayer = (name) => {
    setRemainingTime(6);
    const newPlayerMap = {...playerMap};
    if (!newPlayerMap[name]) {
      const newToggled = [name].concat(toggledPlayers);
      setToggledPlayers(newToggled);
      newPlayerMap[name] = true;
    }
    setPlayerMap(newPlayerMap);
  };

  const setNewPlayer = () => {
    setPlayerName(CharacterNames[Math.floor(Math.random()*CharacterNames.length)]);
  }

  return (
    <div className='gameBoard'>
      <PlayerCharacter pcName={playerName} randomize={setNewPlayer} resetGame={resetGame}/>
      <div className='whoBoard'> 
        {CharacterNames.map((name) => 
          <CharacterPanel key={name} toggled={playerMap[name]} name={name} togglePlayer={togglePlayer} />
        )}
      </div>
      <History questions={toggledArray} />
    </div>
  );
}

export default Board;