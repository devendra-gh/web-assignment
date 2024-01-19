import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Dashboard from '../views/dashboard';

afterEach(cleanup);

describe('Dashboard', () => {
  it('should match snapshot', async () => {
    const { asFragment } = render(<Dashboard />);
    expect(asFragment()).toMatchSnapshot();
  });
});
