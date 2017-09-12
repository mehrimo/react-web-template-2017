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

        <div className="grid-one">
            <div className="grid-item">
              <div className="nested-grid-item"></div>
              <div className="nested-grid-item"></div>
            </div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
        </div>

        <div className="grid-two">
            <div className="grid-item">
              <div className="nested-grid-item"></div>
              <div className="nested-grid-item"></div>
            </div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
        </div>
    </header>
  </div>
);

export default Home
