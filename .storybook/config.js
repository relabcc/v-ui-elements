import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { injectGlobal } from 'styled-components';

import { ThemeProvider, Box, colors } from '../src';

injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    margin: 0;
    background: ${colors.black};
  }
`;

addDecorator(story => (
  <ThemeProvider>
    <Box p="1em">
      {story()}
    </Box>
  </ThemeProvider>
))

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
