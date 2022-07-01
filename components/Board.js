import { CharacterNames } from './constants';
import CharacterPanel from './CharacterPanel';
import styled from 'styled-components';

const Board = () => {
  return (
    <StyledBoard> 
      {CharacterNames.map((name) => <CharacterPanel key={name} name={name} />)}
      <div>
        Player Face
      </div>
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