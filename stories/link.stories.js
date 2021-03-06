import React from 'react';

import { storiesOf } from '@storybook/react';

import Link from '../src/Link';
import Box from '../src/Box';

storiesOf('Link', module)
  .add('Link', () => (
    <Box>
      <Link href="d" fontSize=".5em">
        連結一
      </Link>
      <Link href="d" f=".5em">
        連結二
      </Link>
    </Box>
  ));
