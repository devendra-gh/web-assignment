import React from 'react';
import { cleanup } from '@testing-library/react';
import { renderWithReactIntl } from './login.test';
import Header from '../components/Header';

afterEach(cleanup);

describe('Header', () => {
  it('should match snapshot', async () => {
    const { asFragment } = renderWithReactIntl(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});
