import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import EmailAuth from './index';

storiesOf('Organisms|EmailAuth', module)
  .add('index', () => (
    <EmailAuth
      emailProps={{
        value: text('email value', 'mail'),
        onChange: action('onChange'),
      }}
      passwordProps={{
        value: text('password value', 'password'),
        onChange: action('onChange'),
      }}
      errorMessage=""
      handleLogin={action('handleLogin')}
      handleToResetPassword={action('handleToResetPassword')}
    />
  ))
  .add('error', () => (
    <EmailAuth
      emailProps={{
        value: text('email value', 'mail'),
        onChange: action('onChange'),
      }}
      passwordProps={{
        value: text('password value', 'password'),
        onChange: action('onChange'),
      }}
      errorMessage="errorMessage"
      handleLogin={action('handleLogin')}
      handleToResetPassword={action('handleToResetPassword')}
    />
  ));
