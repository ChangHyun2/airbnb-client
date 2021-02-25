import React from 'react';
import Home from '@page/home';
import Login from '@page/login';
import { UnderSmNavMenu, Footer, Header } from './common';
import { Switch, Route } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Header />
      <UnderSmNavMenu showThreshold={100} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}
