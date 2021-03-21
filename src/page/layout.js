import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPages from '@page/loginPages/LoginPages';
import Footer from '@page/common/Footer';
import UnderSmNavMenu from '@page/common/UnderSmNavMenu';
import Home from '@page/home';
import Header from '@component/Header';
import Divider from '@UI/Divider';

export default function Layout() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        {/* <Route path="/login">
          <Login />
        </Route> */}
      </Switch>
      <LoginPages />
      <UnderSmNavMenu showThreshold={100} />
      <Divider />
      <Footer />
    </>
  );
}
