import styled from 'styled-components';
import { useState } from 'react';
import styledCharacters from '../styles/CharacterPanel.module.css';

const PlayerCharacter = (props) => {
  const { questions } = props;

  const gatherClasses = (character) => {
    const nameIndent = `${character}Indent`;
    return `${styledCharacters.panel} ${styledCharacters[nameIndent]}`;
  }

  console.log(questions);

  return (
    <div>
      {questions.map((characters) => {
        return (
          <div>
            <textarea /> 
            {characters.map((character) => {
              return (
                <div>
                  {character}
                  <div 
                    className={gatherClasses(character)}
                  > 
                    <img
                      className={styledCharacters[character]}
                      src='/board.png'
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )
      })}
    </div>
  );
}

export default PlayerCharacter;