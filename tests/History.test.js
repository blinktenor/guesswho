import React from 'react';
import { render } from '@testing-library/react';
import History from '../components/History';

describe('History component', () => {
  it('renders the correct number of history rows', () => {
    const props = {
      questions: [['Mario', 'Luigi'], ['Peach', 'Bowser'], ['Yoshi', 'Wario']],
    };
    const { getAllByTestId } = render(<History {...props} />);
    const historyRows = getAllByTestId('history-row');
    expect(historyRows).toHaveLength(3);
  });

  it('renders the correct characters in each history row', () => {
    const props = {
      questions: [['Mario', 'Luigi'], ['Peach', 'Bowser'], ['Yoshi', 'Wario']],
    };
    const { getAllByText } = render(<History {...props} />);
    const characters = getAllByText(/(Mario|Luigi|Peach|Bowser|Yoshi|Wario)/);
    expect(characters).toHaveLength(6);
  });
});