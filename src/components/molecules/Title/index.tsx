import React from 'react';
import styled from 'styled-components';
import Icon from '../../atoms/Icon';

export interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => (
  <Wrapper>
    <StyledIcon>
      <Icon icon="" />
    </StyledIcon>
    <StyledTitle>{title}</StyledTitle>
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 35px;
  color: white;
`;

const StyledIcon = styled.div`
  margin: 10px 10px;
`;

const StyledTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
`;

export default Title;
