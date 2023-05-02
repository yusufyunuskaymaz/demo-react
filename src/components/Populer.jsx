import React from 'react'

const Populer = () => {
  return (
    <div className="container populer">
    <div className="populer-container">
      <div className="head">
        <ul>
          <li>Popular nearby</li>
          <li>Villas</li>
          <li>Surfing</li>
          <li>Nation parks</li>
          <li>Lake</li>
          <li>Beach</li>
          <li>Camp</li>
        </ul>
        <div className="filter">
          <span>Filters</span>
          <i className="fa-solid fa-sliders" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Populer