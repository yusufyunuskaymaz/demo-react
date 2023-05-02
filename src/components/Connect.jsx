import React from 'react'
import connect from "../assets/img/other/connect.png";


const Connect = () => {
  return (
    <div className="container">
          <div className="connect-container">
            <div className="header">
              <h6>Summit Up</h6>
              <h2>Looking to be connected?</h2>
            </div>
          </div>
          <div
            className="connect-img"
            style={{ backgroundImage: `url(${connect})` }}
          />
        </div>
  )
}

export default Connect