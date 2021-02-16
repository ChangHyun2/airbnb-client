import React from 'react';
import Home from '@page/home';
import { Switch, Route } from 'react-router-dom';

export default function Routes() {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
