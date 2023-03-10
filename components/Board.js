import { useState, useEffect } from 'react';
import CharacterPanel from './CharacterPanel';
import PlayerCharacter from './PlayerCharacter';
import QuestionTimer from './QuestionTimer';
import History from './History';
import { CharacterNames, Pictures, StartingBoard } from './constants';

const Board = () => {
  const [playerName, setPlayerName] = useState(CharacterNames[Math.floor(Math.random()*CharacterNames.length)]);
  const [playerMap, setPlayerMap] = useState(StartingBoard);
  const timer = QuestionTimer();
  const [toggledPlayers, setToggledPlayers] = useState([]);
  const [toggledArray, setToggledArray] = useState([]);

  useEffect(() => {
    if (!timer.selecting) {
      if (toggledPlayers.length) {
        setToggledArray([toggledPlayers].concat(toggledArray));
        setToggledPlayers([]);
      }
    }
  }, [timer.selecting])

  const resetGame = () => {
    setNewPlayer();
    setPlayerMap(StartingBoard);
    setToggledPlayers([]);
    setToggledArray([]);
  }

  const togglePlayer = (name) => {
    timer.resetTimer();
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
    <div>
      <PlayerCharacter pcName={playerName} randomize={setNewPlayer} resetGame={resetGame}/>
      <div className='whoBoard'> 
        {CharacterNames.map((name) => 
          <CharacterPanel key={name} toggled={playerMap[name]} name={name} togglePlayer={togglePlayer} />
        )}
      </div>
      <History questions={toggledPlayers} />
    </div>
  );
}

export default Board;