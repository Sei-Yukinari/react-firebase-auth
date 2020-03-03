import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import EmailAuth from './index';

storiesOf('Organisms|EmailRegister', module)
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
      handleLRegister={action('handleLRegister')}
      handleToSignIn={action('handleToSignIn')}
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
      handleLRegister={action('handleLRegister')}
      handleToSignIn={action('handleToSignIn')}
    />
  ));
