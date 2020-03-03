import React, { useCallback } from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthState } from 'modules/auth/selector';
import useInput from 'src/hooks/useInput';
import { recoverPassword, signIn, signUp } from 'modules/auth/action';
import RecoverPassword from 'components/organisms/RecoverPassword';
import { useHistory } from 'react-router';

const useSelectProps = () => {
  const { errorMessage } = useSelector(selectAuthState);

  return {
    errorMessage,
  };
};

const useStateProps = () => {
  const { props: emailProps } = useInput();

  return {
    emailProps,
  };
};

const useDispatchProps = (dispatch: Dispatch) => {
  const handleSendResetPassword = useCallback(
    (email: string) => {
      dispatch(recoverPassword.start(email));
    },
    [dispatch],
  );

  return { handleSendResetPassword };
};

const useHistoryProps = () => {
  const history = useHistory();

  const handleToSignIn = () => {
    history.push('/sign_in');
  };

  return { handleToSignIn };
};

const RecoverPasswordContainer: React.FC = () => {
  const dispatch = useDispatch();
  const passProps = {
    ...useSelectProps(),
    ...useStateProps(),
    ...useDispatchProps(dispatch),
    ...useHistoryProps(),
  };

  return <RecoverPassword {...passProps} />;
};

export default RecoverPasswordContainer;
