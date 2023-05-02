import React from 'react'
import cityImage from "../assets/img/other/city-map2.png";


const Hero = () => {
  return (
    <div className="container hero">
    <div
      className="img-container"
      style={{ backgroundImage: `url(${cityImage})` }}
    />
  </div>
  )
}

export default Hero