import React from 'react';
// import { useHistory } from 'react-router';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import { InputProps } from 'src/hooks/useInput';
import { EmailInput } from 'components/atoms/Input';
import Button from 'components/atoms/Button';

export interface RecoverPasswordProps {
  emailProps: InputProps;
  errorMessage: string;
  handleSendResetPassword: (email: string) => void;
  handleToSignIn: () => void;
}

const RecoverPassword: React.FC<RecoverPasswordProps> = ({
  emailProps,
  errorMessage,
  handleSendResetPassword,
  handleToSignIn,
}) => {
  const handleSubmit = () => {
    handleSendResetPassword(emailProps.value);
  };

  return (
    <Wrapper>
      <div>
        <EmailInput inputProps={emailProps} />
      </div>
      <ErrorDiv>
        <strong>{errorMessage}</strong>
      </ErrorDiv>
      <div>
        <Button handleSubmit={handleToSignIn}>キャンセル</Button>
        <Button handleSubmit={handleSubmit}>送信</Button>
      </div>
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
const TextFieldDiv = styled.div``;

const ErrorDiv = styled.div`
  color: red;
  margin: 10px;
`;

const StyledTextField = styled(TextField)`
  background-color: white;
  margin-bottom: 10px;
  width: 290px;
`;

export default RecoverPassword;
