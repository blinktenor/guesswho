import styled from 'styled-components';
import { useState } from 'react';
import { Pictures } from './constants';

const PlayerCharacter = (props) => {
  const { pcName, randomize } = props;

  return (
    <div>
      <div 
        className='PCcharacterContainer'
        onClick={() => randomize()}
      > 
        <img
          className={'selectable'}
          src={Pictures[pcName]}
        />
        <div className='characterName'>{pcName}</div>
      </div>
      <div className="reset" onClick={() => props.resetGame()}> Reset the game </div>
    </div>
  );
}

export default PlayerCharacter;