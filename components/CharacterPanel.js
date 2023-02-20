import styled from 'styled-components';
import { useState } from 'react';
import Image from 'next/image';
// import board from '../public/board.png';
import styledCharacters from '../styles/CharacterPanel.module.css';

const CharacterPanel = (props) => {
  const [excluded, setExcluded] = useState(false);

  const { name } = props;

  const gatherClasses = () => {
    const nameIndent = `${name}Indent`;
    return `${styledCharacters.panel} ${styledCharacters[nameIndent]}`;
  }

  return (
    <div 
      className={gatherClasses()}
      onClick={() => {setExcluded(!excluded);}}
    > 
      {!excluded && 
        <img
          className={styledCharacters[name]}
          src='/board.png'
        />
      }
      { excluded && 
        <img
          className={styledCharacters[name]}
        />
      }
    </div>
  );
}

export default CharacterPanel;