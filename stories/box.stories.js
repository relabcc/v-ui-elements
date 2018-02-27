import React from 'react';

import { storiesOf } from '@storybook/react';

import Box from '../src/Box';
import Absolute from '../src/Absolute';

storiesOf('Box', module)
  .add('Box', () => (<Box w={200} height={200} bg="green" />))
  .add('Absolute', () => (<Absolute w={200} height={200} bg="green" top="2em" left={100} />))
  .add('Z Index', () => (
    <div>
      <Box w={200} height={200} bg="green" top={0} left={0} z={1} position="absolute" />
      <Box w={200} height={200} bg="yellow" top={50} left={50} position="absolute" />
      <Box w={200} height={200} bg="red" top={100} left={100} position="absolute" />
    </div>
  ))
  .add('Text Align', () => (
    <div>
      <Box align="left">Qui minus itaque rerum asperiores facilis est alias.</Box>
      <Box align="center">Qui minus itaque rerum asperiores facilis est alias.</Box>
      <Box align="right">Qui minus itaque rerum asperiores facilis est alias.</Box>
    </div>
  ))
  .add('Overflow', () => (
    <div>
      <Box w="7em" height="7em" overflow="hidden">Qui minus itaque rerum asperiores facilis est alias.</Box>
      <Box w="7em" height="3em" overflowY="scroll">Qui minus itaque rerum asperiores facilis est alias.</Box>
    </div>
  ))
  .add('Transform', () => (
    <div>
      <Box w={200} height={200} bg="yellow" />
      <Box w={200} height={200} bg="red" transform="translateX(100%)" />
    </div>
  ))
  .add('Position', () => (
    <div>
      <Box w={200} height={200} bg="yellow" />
      <Box w={200} height={200} bg="red" position={[null, null, null, 'absolute']} top="0" right="0" />
    </div>
  ))
  .add('Responsive', () => (
    <div>
      <Box height={200} bg="green">
        XS
      </Box>
      <Box height={200} bg="yellow" display={['none', 'block']}>
        SM
      </Box>
      <Box height={200} bg="red" display={['none', null, 'block']}>
        MD
      </Box>
      <Box height={200} bg="blue" display={['none', null, null, 'block']}>
        LG
      </Box>
    </div>
  ));
