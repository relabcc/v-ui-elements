import React from 'react';

import { storiesOf } from '@storybook/react';

import { BackgroundImage, Image } from '../src';

storiesOf('Images', module)
  .add('BackgroundImage', () => (
    <div>
      <BackgroundImage
        src="https://upload.wikimedia.org/wikipedia/commons/2/21/Angel_of_victory.jpg"
        ratio={7 / 22}
        my="1em"
      />
      <BackgroundImage
        src="https://upload.wikimedia.org/wikipedia/commons/2/21/Angel_of_victory.jpg"
        ratio={7 / 22}
        position="50% 100%"
        my="1em"
      />
      <BackgroundImage
        src="https://upload.wikimedia.org/wikipedia/commons/2/21/Angel_of_victory.jpg"
        ratio={7 / 22}
        size="contain"
        position="75% 50%"
        my="1em"
      />
    </div>
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
