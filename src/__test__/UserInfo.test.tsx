import React from 'react';
import { cleanup } from '@testing-library/react';
import { renderWithReactIntl } from './login.test';
import UserInfo from '../components/UserInfo';

afterEach(cleanup);

describe('UserInfo', () => {
  it('should match snapshot', async () => {
    const { asFragment } = renderWithReactIntl(<UserInfo />);
    expect(asFragment()).toMatchSnapshot();
  });
});
