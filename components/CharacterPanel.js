import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Pictures } from './constants';

const CharacterPanel = (props) => {
  const { name, toggled, togglePlayer } = props;
  const [excluded, setExcluded] = useState(toggled);

  useEffect(() => {
    setExcluded(toggled);
  }, [props.toggled]);

  return (
    <div 
      className='characterContainer'
      onClick={() => {togglePlayer(name);}}
      data-testid='character-container'
    > 
      {!excluded && 
        <div>
          <img
            className='selectable'
            src={Pictures[name]}
          />
          <div className='characterName' data-testid='character-name'>{name}</div>
        </div>
      }
      { excluded && 
        <img
          className='selectable'
        />
      }
    </div>
  );
}

export default CharacterPanel;