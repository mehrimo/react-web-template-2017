import React from 'react'
import Bundle from '../../../utils/Bundle'

import loadHome from 'bundle-loader?lazy&name=[name]!../../../components/Home'
import loadResource from 'bundle-loader?lazy&name=[name]!../../../components/Resource'
import loadNotFound from 'bundle-loader?lazy&name=[name]!../../../components/NotFound'

export const Home = (props) => (
  <Bundle load={loadHome}>
    {(Home) => <Home {...props}/>}
  </Bundle>
);

export const Resource = (props) => (
  <Bundle load={loadResource}>
    {(Resource) => <Resource {...props}/>}
  </Bundle>
);

export const NotFound = (props) => (
  <Bundle load={loadNotFound}>
    {(NotFound) => <NotFound {...props}/>}
  </Bundle>
);

