import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import PageTemplate from './index';

storiesOf('Templates|PageTemplate', module).add('index', () => (
  <Wrapper>
    <PageTemplate title="title">
      <p>aaaaaaaaaaaaaa</p>
      <p>bbbbbbbb</p>
      <p>cccccccccccc</p>
    </PageTemplate>
  </Wrapper>
));

const Wrapper = styled.div`
  padding: 14px;
`;
