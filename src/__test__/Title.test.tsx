import React from 'react';
import { cleanup } from '@testing-library/react';
import { renderWithReactIntl } from './login.test';
import Title from '../components/Title';

afterEach(cleanup);

describe('Title', () => {
  it('should match snapshot', async () => {
    const { asFragment } = renderWithReactIntl(<Title />);
    expect(asFragment()).toMatchSnapshot();
  });
});
