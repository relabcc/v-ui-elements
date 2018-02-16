import React from 'react';

import { storiesOf } from '@storybook/react';

import { BackgroundImage } from '../src';

storiesOf('BackgroundImage', module)
  .add('BackgroundImage', () => (
    <BackgroundImage
      src="https://upload.wikimedia.org/wikipedia/commons/2/21/Angel_of_victory.jpg"
      ratio={9 / 16}
    />
  ));
