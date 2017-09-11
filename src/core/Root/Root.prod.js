import PropTypes from 'prop-types';
import React from 'react'
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom'

import App from '../App'

export default function Root({ store }){
  return (
    <Provider store={store}>
      <div id="root-container">
        <HashRouter>
          <App/>
        </HashRouter>
      </div>
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};