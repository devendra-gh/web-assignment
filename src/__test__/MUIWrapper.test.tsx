import React from 'react';
import { cleanup } from '@testing-library/react';
import { renderWithReactIntl } from './login.test';
import MUIWrapper from '../components/MUIWrapper';

afterEach(cleanup);

describe('MUIWrapper', () => {
  it('should match snapshot', async () => {
    const { asFragment } = renderWithReactIntl(<MUIWrapper><div /></MUIWrapper>);
    expect(asFragment()).toMatchSnapshot();
  });
});
