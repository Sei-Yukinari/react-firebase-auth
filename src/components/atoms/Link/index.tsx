import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Link: React.FC<PropsWithChildren<any>> = ({ ...props }) => (
  <Anchor {...props} />
);

const Anchor = styled.button`
  text-decoration: none;
  font-weight: 500;
  margin: 5px;
  &:hover {
    text-decoration: underline;
  }
`;

export default Link;
