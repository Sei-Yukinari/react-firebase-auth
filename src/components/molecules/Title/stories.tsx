import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Title from './index';

storiesOf('Molecules|Title', module).add('index', () => (
  <Wrapper>
    <Title title="Title" />
  </Wrapper>
));

const Wrapper = styled.div``;
