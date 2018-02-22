import React from 'react';

import { storiesOf } from '@storybook/react';

import Box from '../src/Box';
import Absolute from '../src/Absolute';

storiesOf('Box', module)
  .add('Box', () => (<Box w={200} height={200} bg="green" />))
  .add('Absolute', () => (<Absolute w={200} height={200} bg="green" top="2em" left={100} />))
  .add('Z Index', () => (
    <div>
      <Absolute w={200} height={200} bg="green" top={0} left={0} z={1} />
      <Absolute w={200} height={200} bg="yellow" top={50} left={50} />
      <Absolute w={200} height={200} bg="red" top={100} left={100} />
    </div>
  ))
  .add('Text Align', () => (
    <Box>
      <Box align="left">Qui minus itaque rerum asperiores facilis est alias.</Box>
      <Box align="center">Qui minus itaque rerum asperiores facilis est alias.</Box>
      <Box align="right">Qui minus itaque rerum asperiores facilis est alias.</Box>
    </Box>
  ));
