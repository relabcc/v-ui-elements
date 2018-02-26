import React from 'react';

import { storiesOf } from '@storybook/react';

import TriangleBoreder from '../src/TriangleBorder';

storiesOf('TriangleBorder', module)
  .add('TriangleBorder', () => (
    <TriangleBoreder w="200px" height="200px" borderColor="green" />
  ));
