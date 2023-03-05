import { useState, useEffect } from 'react';
import CharacterPanel from './CharacterPanel';
import PlayerCharacter from './PlayerCharacter';
import QuestionTimer from './QuestionTimer';
import { CharacterNames, StartingBoard } from './constants';

const Board = () => {
  const [playerName, setPlayerName] = useState(CharacterNames[Math.floor(Math.random()*CharacterNames.length)]);
  const [playerMap, setPlayerMap] = useState(StartingBoard);
  const timer = QuestionTimer();
  const [toggledPlayers, setToggledPlayers] = useState([]);

  useEffect(() => {
    if (!timer.selecting) {
      console.log('ending');
      console.log(toggledPlayers);
      setToggledPlayers([]);
    }
  }, [timer.selecting])

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
      <PlayerCharacter pcName={playerName} randomize={setNewPlayer}/>
      <div className='whoBoard'> 
        {Object.keys(playerMap).map((name) => 
          <CharacterPanel key={name} toggled={playerMap[name]} name={name} togglePlayer={togglePlayer} />
        )}
      </div>
    </div>
  );
}

export default Board;