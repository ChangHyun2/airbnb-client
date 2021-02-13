import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Show from '@component/Show';

export default function Routes() {
  return (
    <Switch>
      <Route path="/">
        <Show.onlySm>
          <div>sm</div>
        </Show.onlySm>
        <Show.smToMd>
          <div>sm to md</div>
        </Show.smToMd>
        <Show.overMd>
          <div>over md</div>
        </Show.overMd>
      </Route>
    </Switch>
  );
}
