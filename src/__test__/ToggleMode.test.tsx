import React from 'react';
import { cleanup } from '@testing-library/react';
import { renderWithReactIntl } from './login.test';
import ToggleMode from '../components/ToggleMode';

afterEach(cleanup);

describe('ToggleMode', () => {
  it('should match snapshot', async () => {
    const { asFragment } = renderWithReactIntl(<ToggleMode />);
    expect(asFragment()).toMatchSnapshot();
  });
});
