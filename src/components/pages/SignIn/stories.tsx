import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import PageTemplate from 'components/templates/PageTemplate';
import EmailAuth from 'components/organisms/EmailAuth';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';

storiesOf('Pages|SignIn', module).add('index', () => (
  <Wrapper>
    <PageTemplate title="Title">
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
    </PageTemplate>
  </Wrapper>
));

const Wrapper = styled.div`
  padding: 14px;
`;
