import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { EmailInput, PasswordInput } from './index';

// @ts-ignore
storiesOf('Atoms|Input', module)
  .add('email', () => (
    <EmailInput
      inputProps={{
        value: text('email value', 'mail'),
        onChange: action('onChange'),
      }}
    />
  ))
  .add('password', () => (
    <PasswordInput
      inputProps={{
        value: text('password value', 'password'),
        onChange: action('onChange'),
      }}
    />
  ));
