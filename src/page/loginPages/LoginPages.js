import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import SmSignIn from './Signin/SmSignIn';
// import MobileSignUp from './Signup/MobileSignUp';
// import MobileSignUpEmail from './Signup/MobileSignUpEmail';
// import MobileForgotPassword from './ForgotPassword/MobileForgotPassword';
import Show from '@component/Show';
import { useAuthContext } from '@context/global';

function LoginRoutes() {
  const { state: isAuth } = useAuthContext();

  return (
    <Show.onlyXs>
      <Switch>
        {isAuth && <Redirect to="/" />}
        <Route path="/login">
          <SmSignIn />
        </Route>
        <Route path="/forgot-password">
          <div>forgot password</div>
        </Route>
        {/* <Route path="/signup">
          <MobileSignUp />
        </Route>
        <Route path="/signup-email">
          <MobileSignUpEmail />
        </Route>
      */}
      </Switch>
    </Show.onlyXs>
  );
}

export default LoginRoutes;
