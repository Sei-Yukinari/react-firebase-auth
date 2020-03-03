import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import PageTemplate from 'components/templates/PageTemplate';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import EmailRegister from 'components/organisms/EmailRegister';

storiesOf('Pages|SignUp', module).add('index', () => (
  <Wrapper>
    <PageTemplate title="Title">
      <EmailRegister
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
    </PageTemplate>
  </Wrapper>
));

const Wrapper = styled.div`
  padding: 14px;
`;
