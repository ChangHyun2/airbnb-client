import React from 'react';
import styled from '@emotion/styled';
import { Switch, Route } from 'react-router-dom';
import Show from '@component/Show';
import FluidButton from '@UI/Button/FluidButton';
import { adventureIcon } from '@UI/Icon';

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
