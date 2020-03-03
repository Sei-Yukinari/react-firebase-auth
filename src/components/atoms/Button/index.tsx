import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Button as MaterialButton } from '@material-ui/core';

export interface ButtonProps {
  handleSubmit: () => void;
}

const Button: React.FC<ButtonProps> = ({ handleSubmit, children }) => (
  <StyledButton variant="contained" color="primary" onClick={handleSubmit}>
    {children}
  </StyledButton>
);

const StyledButton = styled(MaterialButton)`
  margin: 10px;
  min-width: 100px;
`;

export default Button;
