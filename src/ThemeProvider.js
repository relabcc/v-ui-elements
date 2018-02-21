import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme, colors, font } from './theme';

const Base = styled.div`
  font-family: ${font};
  color: ${colors.white};
`;

export default props => (
  <ThemeProvider theme={theme}>
    <Base {...props} />
  </ThemeProvider>
);
