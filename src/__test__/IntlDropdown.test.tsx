import React from 'react';
import { cleanup } from '@testing-library/react';
import { renderWithReactIntl } from './login.test';
import IntlDropdown from '../components/IntlDropdown';

afterEach(cleanup);

describe('IntlDropdown', () => {
  it('should match snapshot', async () => {
    const { asFragment } = renderWithReactIntl(<IntlDropdown />);
    expect(asFragment()).toMatchSnapshot();
  });
});
