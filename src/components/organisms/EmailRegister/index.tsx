import React from 'react';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import { InputProps } from 'src/hooks/useInput';
import Link from 'components/atoms/Link';
import Button from 'components/atoms/Button';
import { EmailInput, PasswordInput } from 'components/atoms/Input';

export interface EmailRegisterProps {
  emailProps: InputProps;
  passwordProps: InputProps;
  errorMessage: string;
  handleLRegister: (email: string, password: string) => void;
  handleToSignIn: () => void;
}

const EmailRegister: React.FC<EmailRegisterProps> = ({
  emailProps,
  passwordProps,
  errorMessage,
  handleLRegister,
  handleToSignIn,
}) => {
  const handleSubmit = () => {
    handleLRegister(emailProps.value, passwordProps.value);
  };

  return (
    <Wrapper>
      <div>
        <EmailInput inputProps={emailProps} />
        <PasswordInput inputProps={passwordProps} />
      </div>
      <ErrorDiv>
        <strong>{errorMessage}</strong>
      </ErrorDiv>
      <div>
        <Button handleSubmit={handleSubmit}>登録</Button>
      </div>
      <LinkDiv>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link onClick={handleToSignIn}>ログインはこちら</Link>
      </LinkDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 500px;
  background-color: #d9d9d9;
  height: auto;
  border-radius: 5px;
  padding: 40px 0;
  text-align: center;
`;
const LinkDiv = styled.div`
  margin: 10px;
`;

const ErrorDiv = styled.div`
  color: red;
  margin: 10px;
`;

export default EmailRegister;
