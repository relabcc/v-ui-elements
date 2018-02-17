import React from 'react';

import { storiesOf } from '@storybook/react';

import Loader from '../src/Loader';

storiesOf('Loader', module)
  .add('Loader', () => (<Loader />))
  .add('Loader Higher', () => (<Loader height="6px" />))
  .add('Loader Faster', () => (<Loader duration={1} />));
