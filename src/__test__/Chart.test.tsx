import React from 'react';
import { cleanup } from '@testing-library/react';
import { renderWithReactIntl } from './login.test';
import Chart from '../components/Chart';

afterEach(cleanup);

describe('Chart', () => {
  it('should match snapshot', async () => {
    const { asFragment } = renderWithReactIntl(<Chart />);
    expect(asFragment()).toMatchSnapshot();
  });
});
