import React from 'react';
import { cleanup } from '@testing-library/react';
import { renderWithReactIntl } from './login.test';
import Orders from '../components/Orders';

afterEach(cleanup);

describe('Orders', () => {
  it('should match snapshot', async () => {
    const { asFragment } = renderWithReactIntl(<Orders />);
    expect(asFragment()).toMatchSnapshot();
  });
});
