import styled from 'styled-components';
import { useState } from 'react';
import Image from 'next/image';
import styledCharacters from '../styles/CharacterPanel.module.css';

const PlayerCharacter = (props) => {
  const { pcName, randomize } = props;

  const gatherClasses = () => {
    const nameIndent = `${pcName}Indent`;
    return `${styledCharacters.panel} ${styledCharacters[nameIndent]} PC`;
  }

  return (
    <div 
      className={gatherClasses()}
      onClick={() => randomize()}
    > 
      <img
        className={styledCharacters[pcName]}
        src='/board.png'
      />
    </div>
  );
}

export default PlayerCharacter;