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
  background-color: lightblue;
  width: 80%;
  margin-right: 10%;
  margin-left: 10%;
  margin-top: 32px;
`;

export default Board;