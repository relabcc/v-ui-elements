import React from 'react';

import { storiesOf } from '@storybook/react';

import Box from '../src/Box';
import Button from '../src/Button';
import ButtonNext from '../src/ButtonNext';

storiesOf('Button', module)
  .add('Button', () => (
    <Box>
      <Button mx="1em">Button</Button>
      <Button mx="1em">按鈕</Button>
    </Box>
  ))
  .add('Button Disabled', () => (
    <Button disabled>Button</Button>
  ))
  .add('FullWidth Button', () => (
    <Button fullWidth>Button</Button>
  ))
  .add('Button Next', () => (
    <ButtonNext>Button Next</ButtonNext>
  ));
