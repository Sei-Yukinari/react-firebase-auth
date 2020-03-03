import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Icon from './index';
import icon from './icons.png';

storiesOf('Atoms|Icon', module).add('index', () => (
  <Wrapper>
    <Icon icon={icon} />
  </Wrapper>
));

const Wrapper = styled.div`
  background-color: rgb(0, 210, 232);
`;
