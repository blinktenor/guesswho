import { CharacterNames } from './constants';
import { useState, useEffect } from 'react';
import CharacterPanel from './CharacterPanel';
import PlayerCharacter from './PlayerCharacter';
import QuestionSet from './QuestionSet';
import QuestionTimer from './QuestionTimer';

const Board = () => {
  const [playerName, setPlayerName] = useState(CharacterNames[Math.floor(Math.random()*CharacterNames.length)]);
  const [playerMap, setPlayerMap] = useState({});
  const [toggledPlayers, setToggledPlayers] = useState([]);
  const questions = [];

  /* useEffects */

  useEffect(() => {
    const tempPlayerMap = {};
    CharacterNames.forEach((name) => {
      tempPlayerMap[name] = false;
    });
    setPlayerMap(tempPlayerMap);
  }, []);

  useEffect(() => {
    if (toggledPlayers.length > 0) { 
      console.log('things happened');
    }
  }, [toggledPlayers.length]);

  /* methods */

  const setNewPlayer = () => {
    setPlayerName(CharacterNames[Math.floor(Math.random()*CharacterNames.length)]);
  }

  const togglePlayer = (name) => {
    const newPlayerMap = {...playerMap};
    newPlayerMap[name] = !newPlayerMap[name];
    setPlayerMap(newPlayerMap);
    if (newPlayerMap[name]) {
      toggledPlayers.push(name);
    }
  };

  return (
    <div>
      <PlayerCharacter pcName={playerName} randomize={setNewPlayer}/>
      <QuestionSet />
      <div className='whoBoard'> 
        {Object.keys(playerMap).map((name) => 
          <CharacterPanel key={name} toggled={playerMap[name]} name={name} togglePlayer={togglePlayer} />
        )}
      </div>
    </div>
  );
}

export default Board;