import { CharacterNames } from './constants';
import CharacterPanel from './CharacterPanel';
import PlayerCharacter from './PlayerCharacter';
import styled from 'styled-components';

const Board = () => {
  const playerName = CharacterNames[Math.floor(Math.random()*CharacterNames.length)];

  return (
    <StyledBoard> 
      {CharacterNames.map((name) => <CharacterPanel key={name} name={name} />)}
      <PlayerCharacter pcName={playerName} />
    </StyledBoard>
  );
}

const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  background-color: gold;
  width: 80%;
  margin-right: 10%;
  margin-left: 10%;
  margin-top: 32px;
`;

export default Board;