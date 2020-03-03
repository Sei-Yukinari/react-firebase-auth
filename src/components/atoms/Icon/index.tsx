import React from 'react';
import styled from 'styled-components';

export interface IconProps {
  icon: string;
}

const Icon: React.FC<IconProps> = ({ icon }) => (
  <div>
    <Img src={icon} alt="logo" />
  </div>
);

const Img = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 18px;
`;

export default Icon;
