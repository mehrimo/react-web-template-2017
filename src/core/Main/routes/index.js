import React from 'react'

import {
  Switch,
  Route,
} from 'react-router-dom'

import {
  Home,
  Resource,
  NotFound,
} from './lazy_routes'

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/resource" component={Resource} />
    <Route component={NotFound}/>
  </Switch>
);
