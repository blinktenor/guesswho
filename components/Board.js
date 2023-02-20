import { CharacterNames } from './constants';
import { useState } from 'react';
import CharacterPanel from './CharacterPanel';
import PlayerCharacter from './PlayerCharacter';
import styled from 'styled-components';

const Board = () => {
  const [playerName, setPlayerName] = useState(CharacterNames[Math.floor(Math.random()*CharacterNames.length)]);

  const setNewPlayer = () => {
    setPlayerName(CharacterNames[Math.floor(Math.random()*CharacterNames.length)]);
  }

  return (
    <div>
      <PlayerCharacter pcName={playerName} randomize={setNewPlayer}/>
      <StyledBoard className='whoBoard'> 
        {CharacterNames.map((name) => <CharacterPanel key={name} name={name} />)}
      </StyledBoard>
    </div>
  );
}

const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  background-color: gold;
  margin-right: 10%;
  margin-left: 10%;
  margin-top: 32px;
`;

export default Board;