import React from 'react';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import { InputProps } from 'src/hooks/useInput';
import Link from 'components/atoms/Link';
import Button from 'components/atoms/Button';
import { EmailInput, PasswordInput } from 'components/atoms/Input';

export interface EmailAuthProps {
  emailProps: InputProps;
  passwordProps: InputProps;
  errorMessage: string;
  handleLogin: (email: string, password: string) => void;
  handleToResetPassword: () => void;
}

const EmailAuth: React.FC<EmailAuthProps> = ({
  emailProps,
  passwordProps,
  errorMessage,
  handleLogin,
  handleToResetPassword,
}) => {
  const handleSubmit = () => {
    handleLogin(emailProps.value, passwordProps.value);
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
        <Button handleSubmit={handleSubmit}>ログイン</Button>
      </div>
      <LinkDiv>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link href="#" onClick={handleToResetPassword}>
          パスワード変更はこちら
        </Link>
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

export default EmailAuth;
