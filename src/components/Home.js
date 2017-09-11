import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div id="home-container">

    <header className="retainer-sm">

      <h3>Homie Page</h3>

        <Link to="/resource">
          Resource
        </Link>

      <br />

      <div>test one</div>
      <div>test two</div>
      <div>test three</div>
    </header>
  </div>
);

export default Home
