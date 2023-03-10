import styled from 'styled-components';
import { useEffect, useState } from 'react';
import styledCharacters from '../styles/CharacterPanel.module.css';

const CharacterPanel = (props) => {
  const { name, toggled, togglePlayer } = props;
  const [excluded, setExcluded] = useState(toggled);

  useEffect(() => {
    setExcluded(toggled);
  }, [props.toggled]);

  const gatherClasses = () => {
    const nameIndent = `${name}Indent`;
    return `${styledCharacters.panel} ${styledCharacters[nameIndent]}`;
  }

  return (
    <div 
      className={gatherClasses()}
      onClick={() => {togglePlayer(name);}}
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