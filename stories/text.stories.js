import React from 'react';

import { storiesOf } from '@storybook/react';

import Box from '../src/Box';
import Text from '../src/Text';

storiesOf('Text', module)
  .add('Text', () => (
    <Box>
      <Text>那是最危險最專制不過的旅伴，想中止也不可能，前途是那里，即使有，因此我有時想，圓滿這全程的寂寞，我們明白的只是底下流血的脛踝，偶爾記起斷片的音調，他的生活是無阻礙的。</Text>
      <Text fontWeight="bold">那是最危險最專制不過的旅伴，想中止也不可能，前途是那里，即使有，因此我有時想，圓滿這全程的寂寞，我們明白的只是底下流血的脛踝，偶爾記起斷片的音調，他的生活是無阻礙的。</Text>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
      <Text textTransform="uppercase">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
      <Text f="2em" fontWeight="300">Lorem ipsum dolor sit amet</Text>
    </Box>
  ));
