import React from 'react';
import { cleanup } from '@testing-library/react';
import { renderWithReactIntl } from './login.test';
import Signup from '../components/Signup';

afterEach(cleanup);

describe('Signup', () => {
  it('should match snapshot', async () => {
    const { asFragment } = renderWithReactIntl(<Signup />);
    expect(asFragment()).toMatchSnapshot();
  });
});
