import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { Home } from './views/home';
import { Verify } from './views/verify';

export const Routes = () => <Switch>
  <Route exact path="/">
    <Home />
  </Route>
  <Route exact path="/verify">
    <Verify />
  </Route>
  <Route exact path="/verify/:id">
    <Verify />
  </Route>
</Switch>