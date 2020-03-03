import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import RecoverPassword from './index';

storiesOf('Organisms|RecoverPassword', module)
  .add('index', () => (
    <RecoverPassword
      emailProps={{
        value: text('email value', 'mail'),
        onChange: action('onChange'),
      }}
      errorMessage=""
      handleSendResetPassword={action('handleSendResetPassword')}
      handleToSignIn={action('handleToSignIn')}
    />
  ))
  .add('error', () => (
    <RecoverPassword
      emailProps={{
        value: text('email value', 'mail'),
        onChange: action('onChange'),
      }}
      errorMessage="errorMessage"
      handleSendResetPassword={action('handleSendResetPassword')}
      handleToSignIn={action('handleToSignIn')}
    />
  ));
