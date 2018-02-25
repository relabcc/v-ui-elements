import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Input from '../src/Input';

storiesOf('Input', module)
  .add('Input', () => (
    <Input
      placeholder="E-mail"
      onChange={action('onChange')}
    />
  ))
  .add('Readonly', () => (
    <Input
      value="只能遠觀不能褻玩焉"
      onChange={action('onChange')}
      readOnly
    />
  ))
  .add('Disabled', () => (
    <Input
      value="不可以歐"
      disabled
    />
  ));
