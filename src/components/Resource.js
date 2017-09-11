import React from 'react'

import AuthHOC from '../containers/AuthHOC'

const Resource = () => (
  <div id="resource-container">

    <header className="retainer-sm">
      <h3>Super Special Secret Data</h3>
    </header>

  </div>
);

export default AuthHOC(Resource)
