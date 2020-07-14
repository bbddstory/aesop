import React from 'react';
import { render } from '@testing-library/react';
import Shop from './Shop';

it('Renders comments list panel w/o data', () => {
  const { getByText } = render(<Shop />);

  const accordionTitle = getByText(/Aēsop Shop/i);
  const loadingMessage = getByText(/Loading/i);

  expect(accordionTitle).toBeInTheDocument();
  expect(loadingMessage).toBeInTheDocument();
});
