import React from 'react';

import { storiesOf } from '@storybook/react';

import Box from '../src/Box';
import Absolute from '../src/Absolute';

storiesOf('Box', module)
  .add('Box', () => (<Box w={200} height={200} bg="green" />))
  .add('Absolute', () => (<Absolute w={200} height={200} bg="green" top="2em" left={100} />))
  .add('Text Align', () => (
    <Box>
      <Box align="left">Qui minus itaque rerum asperiores facilis est alias.</Box>
      <Box align="center">Qui minus itaque rerum asperiores facilis est alias.</Box>
      <Box align="right">Qui minus itaque rerum asperiores facilis est alias.</Box>
    </Box>
  ));
