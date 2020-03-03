import React from 'react';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';

export interface InputProps {
  inputProps: InputProps;
}

// @ts-ignore
const EmailInput: React.FC<InputProps, any> = ({ inputProps }) => (
  <TextFieldDiv>
    <StyledTextField
      required
      name="email"
      label="メールアドレス"
      variant="standard"
      {...inputProps}
    />
  </TextFieldDiv>
);

// @ts-ignore
const PasswordInput: React.FC<InputProps, any> = ({ inputProps }) => (
  <TextFieldDiv>
    <StyledTextField
      required
      name="pass"
      label="パスワード"
      variant="standard"
      type="password"
      autoComplete="current-password"
      {...inputProps}
    />
  </TextFieldDiv>
);

const TextFieldDiv = styled.div``;

const StyledTextField = styled(TextField)`
  background-color: white;
  margin-bottom: 10px;
  width: 290px;
`;

export { EmailInput, PasswordInput };
