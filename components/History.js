import styled from 'styled-components';
import { useState } from 'react';
import { Pictures } from './constants';

const PlayerCharacter = (props) => {
  const { questions } = props;

  const gatherClasses = (character) => {
    const nameIndent = `${character}Indent`;
    return `${styledCharacters.panel} ${styledCharacters[nameIndent]}`;
  }

  return (
    <div className='historyContainer'>
      {questions.map((characters) => {
        return (
          <div key={characters}>
            <textarea className='questionText' /> 
            <div className='removedCharactersContainer'>
              {characters.map((character) => {
                return (
                  <div key={character}> 
                    <img
                      className={'selectable'}
                      src={Pictures[character]}
                    />
                    <div className='characterName'>{character}</div>
                  </div>
                );
              })}
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default PlayerCharacter;