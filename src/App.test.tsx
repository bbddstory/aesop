import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('Renders app w/o data', () => {
  const { getByText } = render(<App />);

  const accordionTitle = getByText(/Aēsop Shop/i);
  const loadingMessage = getByText(/Loading/i);

  expect(accordionTitle).toBeInTheDocument();
  expect(loadingMessage).toBeInTheDocument();
});
