import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Footer from './index';

storiesOf('Organisms|Footer', module).add('index', () => (
  <Wrapper>
    <Footer />
  </Wrapper>
));

const Wrapper = styled.div``;
