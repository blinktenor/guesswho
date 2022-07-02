import styled from 'styled-components';
import { useState } from 'react';
import Image from 'next/image';
// import board from '../public/board.png';
import styledCharacters from '../styles/CharacterPanel.module.css';

const CharacterPanel = (props) => {
  const [excluded, setExcluded] = useState(false);

  const { name } = props;

  const clickCharacterPanel = (event) => {
    console.log(event.target);
    setExcluded(!excluded);
  }

  const gatherClasses = () => {
    const nameIndent = `${name}Indent`;
    return `${styledCharacters.panel} ${styledCharacters[nameIndent]}`;
  }

  return (
    <div 
      className={gatherClasses()}
      onClick={clickCharacterPanel}
    > 
      <img
        className={styledCharacters[name]}
        src='/board.png'
      />
    </div>
  );
}

export default CharacterPanel;