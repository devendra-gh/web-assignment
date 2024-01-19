import React from 'react';
import { cleanup } from '@testing-library/react';
import { renderWithReactIntl } from './login.test';
import Layout from '../components/Layout';

afterEach(cleanup);

describe('Layout', () => {
  it('should match snapshot', async () => {
    const { asFragment } = renderWithReactIntl(<Layout />);
    expect(asFragment()).toMatchSnapshot();
  });
});
