import React, { useCallback } from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import EmailRegister from 'components/organisms/EmailRegister';
import { selectAuthState } from 'modules/auth/selector';
import useInput from 'src/hooks/useInput';
import { signUp } from 'modules/auth/action';
import { useHistory } from 'react-router';

const useStateProps = () => {
  const { errorMessage } = useSelector(selectAuthState);

  const { props: emailProps } = useInput();
  const { props: passwordProps } = useInput();

  return {
    emailProps,
    passwordProps,
    errorMessage,
  };
};

const useDispatchProps = (dispatch: Dispatch) => {
  const handleLRegister = useCallback(
    (email: string, password: string) => {
      dispatch(signUp.start({ email, password }));
    },
    [dispatch],
  );

  return { handleLRegister };
};

const useHistoryProps = () => {
  const history = useHistory();

  const handleToSignIn = () => {
    history.push('/sign_in');
  };

  return { handleToSignIn };
};

const EmailRegisterContainer: React.FC = () => {
  const dispatch = useDispatch();
  const passProps = {
    ...useStateProps(),
    ...useDispatchProps(dispatch),
    ...useHistoryProps(),
  };

  return <EmailRegister {...passProps} />;
};

export default EmailRegisterContainer;
