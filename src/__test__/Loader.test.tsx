import React from 'react';
import { cleanup } from '@testing-library/react';
import { renderWithReactIntl } from './login.test';
import Loader from '../components/Loader';

afterEach(cleanup);

describe('Loader', () => {
  it('should match snapshot', async () => {
    const { asFragment } = renderWithReactIntl(<Loader />);
    expect(asFragment()).toMatchSnapshot();
  });
});
