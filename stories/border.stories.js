import React from 'react';

import { storiesOf } from '@storybook/react';

import Border from '../src/Border';

storiesOf('Border', module)
  .add('All Border', () => (<Border w={200} height={200} />))
  .add('Border Oneside', () => (<Border w={200} height={200} right />))
  .add('Border Someside', () => (<Border w={200} height={200} bottom right />))
  .add('Border Customization', () => (<Border w={200} height={200} borderWidth="4px" borderColor="red" />));
