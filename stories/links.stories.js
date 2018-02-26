import React from 'react';

import { storiesOf } from '@storybook/react';

import Link from '../src/Link';
import LinkGroup from '../src/LinkGroup';

storiesOf('Links', module)
  .add('Links', () => (
    <LinkGroup>
      <Link href="Input">連結</Link>
      <Link href="Input">忘記密碼</Link>
    </LinkGroup>
  ));
