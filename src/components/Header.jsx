import React from 'react'
import logo from "../assets/img/other/logo.svg";

const Header = () => {
  return (
    <header>
    <div className="container header">
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="searchbar">
          <input
            type="text"
            name=""
            id=""
            placeholder="Istanbul / 2 Person / 27 Mar - 30 Mar"
          />
          <i className="fa-sharp fa-solid fa-magnifying-glass fa-rotate-90 fa-xs" />
        </div>
        <div className="buttons">
          <span className="stays">
            <span>Stays</span>
            <i className="fa-solid fa-caret-down fa-lg" />
          </span>
          <button className="account button-hover">My Account</button>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header