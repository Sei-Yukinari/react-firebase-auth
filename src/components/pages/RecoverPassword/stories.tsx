import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import PageTemplate from 'components/templates/PageTemplate';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import RecoverPassword from 'components/organisms/RecoverPassword';

storiesOf('Pages|RecoverPassword', module).add('index', () => (
  <Wrapper>
    <PageTemplate title="Title">
      <RecoverPassword
        emailProps={{
          value: text('email value', 'mail'),
          onChange: action('onChange'),
        }}
        errorMessage=""
        handleSendResetPassword={action('handleSendResetPassword')}
        handleToSignIn={action('handleToSignIn')}
      />
    </PageTemplate>
  </Wrapper>
));

const Wrapper = styled.div`
  padding: 14px;
`;
