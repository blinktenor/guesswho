import { CharacterNames } from './constants';
import { useState } from 'react';
import CharacterPanel from './CharacterPanel';
import PlayerCharacter from './PlayerCharacter';

const Board = () => {
  const [playerName, setPlayerName] = useState(CharacterNames[Math.floor(Math.random()*CharacterNames.length)]);

  const setNewPlayer = () => {
    setPlayerName(CharacterNames[Math.floor(Math.random()*CharacterNames.length)]);
  }

  return (
    <div>
      <PlayerCharacter pcName={playerName} randomize={setNewPlayer}/>
      <div className='whoBoard'> 
        {CharacterNames.map((name) => <CharacterPanel key={name} name={name} />)}
      </div>
    </div>
  );
}

export default Board;