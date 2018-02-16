import React from 'react';

import { storiesOf } from '@storybook/react';

import { BackgroundImage, Image } from '../src';

storiesOf('Images', module)
  .add('BackgroundImage', () => (
    <BackgroundImage
      src="https://upload.wikimedia.org/wikipedia/commons/2/21/Angel_of_victory.jpg"
      ratio={9 / 16}
    />
  ))
  .add('ImageWithWidth', () => (
    <Image
      src="https://upload.wikimedia.org/wikipedia/commons/2/21/Angel_of_victory.jpg"
      width={400}
    />
  ))
  .add('ImageWithHeight', () => (
    <Image
      src="https://upload.wikimedia.org/wikipedia/commons/2/21/Angel_of_victory.jpg"
      height={400}
    />
  ));
