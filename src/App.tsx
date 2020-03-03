import React from 'react';
import { Route, Switch } from 'react-router';

import NotFound from 'components/pages/NotFound';
import SignIn from 'components/pages/SignIn';
import SignUp from 'components/pages/SignUp';
import withInitialize from 'containers/hoc/withInitialize';
import Succeed from 'components/pages/Succeed';
import RecoverPassword from 'components/pages/RecoverPassword';
import SendMail from 'components/pages/SendMail';

const App: React.FC = () => (
  <div>
    <Switch>
      <Route exact path="/" component={SignUp} />
      <Route exact path="/sign_in" component={SignIn} />
      <Route exact path="/succeed" component={Succeed} />
      <Route exact path="/reset_password" component={RecoverPassword} />
      <Route exact path="/send_mail" component={SendMail} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default withInitialize(App);
