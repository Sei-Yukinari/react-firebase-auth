import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './index';

storiesOf('Atoms|Button', module).add('index', () => (
  <Button handleSubmit={action('handleSubmit')}>ボタン</Button>
));
