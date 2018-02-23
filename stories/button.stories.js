import React from 'react';

import { storiesOf } from '@storybook/react';
import LinkTo from '@storybook/addon-links/react';
import { action } from '@storybook/addon-actions';

import Box from '../src/Box';
import Button from '../src/Button';
import ButtonNext from '../src/ButtonNext';

const ButtonLink = Button.withComponent(LinkTo);

storiesOf('Button', module)
  .add('Button', () => (
    <Box>
      <Button mx="1em" onClick={action('Button')}>Button</Button>
      <Button mx="1em" onClick={action('按鈕')}>按鈕</Button>
    </Box>
  ))
  .add('Button Link', () => (
    <ButtonLink story="Button Next">Button</ButtonLink>
  ))
  .add('Button Disabled', () => (
    <Button disabled>Button</Button>
  ))
  .add('FullWidth Button', () => (
    <Button fullWidth onClick={action('Button')}>Button</Button>
  ))
  .add('Button Next', () => (
    <Box>
      <ButtonNext mx="1em" onClick={action('Button Next')}>Button Next</ButtonNext>
      <ButtonNext mx="1em" onClick={action('基金投資推薦')}>基金投資推薦</ButtonNext>
    </Box>
  ));
