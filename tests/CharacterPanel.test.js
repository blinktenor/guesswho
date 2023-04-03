import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CharacterPanel from '../components/CharacterPanel';
import '@testing-library/jest-dom';

describe('CharacterPanel component', () => {
  it('renders the character name and image when not excluded', () => {
    const props = {
      name: 'Mario',
      toggled: false,
      togglePlayer: jest.fn(),
    };
    const { queryByTestId, getByText } = render(<CharacterPanel {...props} />);
    expect(queryByTestId('character-name')).toBeInTheDocument();
    expect(getByText('Mario')).toBeInTheDocument();
  });

  it('does not render the character name and image when excluded', () => {
    const props = {
      name: 'Luigi',
      toggled: true,
      togglePlayer: jest.fn(),
    };
    const { queryByTestId, queryByText } = render(<CharacterPanel {...props} />);
    expect(queryByTestId('character-name')).not.toBeInTheDocument();
    expect(queryByText('Luigi')).not.toBeInTheDocument();
  });

  it('calls the togglePlayer function when clicked', () => {
    const props = {
      name: 'Yoshi',
      toggled: false,
      togglePlayer: jest.fn(),
    };
    const { getByTestId } = render(<CharacterPanel {...props} />);
    const characterContainer = getByTestId('character-container');
    fireEvent.click(characterContainer);
    expect(props.togglePlayer).toHaveBeenCalledWith('Yoshi');
  });
});