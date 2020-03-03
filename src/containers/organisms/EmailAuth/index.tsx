import React, { useCallback } from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import EmailAuth from 'components/organisms/EmailAuth';
import { selectAuthState } from 'modules/auth/selector';
import useInput from 'src/hooks/useInput';
import { signIn } from 'modules/auth/action';
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
  const handleLogin = useCallback(
    (email: string, password: string) => {
      dispatch(signIn.start({ email, password }));
    },
    [dispatch],
  );

  return { handleLogin };
};

const useHistoryProps = () => {
  const history = useHistory();

  const handleToResetPassword = () => {
    history.push('/reset_password');
  };

  return { handleToResetPassword };
};

const EmailAuthContainer: React.FC = () => {
  const dispatch = useDispatch();
  const passProps = {
    ...useStateProps(),
    ...useDispatchProps(dispatch),
    ...useHistoryProps(),
  };

  return <EmailAuth {...passProps} />;
};

export default EmailAuthContainer;
