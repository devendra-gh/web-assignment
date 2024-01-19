import React from 'react';
import { cleanup } from '@testing-library/react';
import { renderWithReactIntl } from './login.test';
import SideDrawer from '../components/SideDrawer';

afterEach(cleanup);

describe('SideDrawer', () => {
  it('should match snapshot', async () => {
    const { asFragment } = renderWithReactIntl(<SideDrawer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
