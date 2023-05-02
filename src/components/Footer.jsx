import React from 'react'
import logo from "../assets/img/other/logo.png";
import { BsTelephone } from 'react-icons/bs';



const Footer = () => {
  return (
    <footer>
    <div className="brand">
      <div className="logo-div">
        <img src={logo} alt="footer-logo" />
      </div>
      <div className="mobile-class">
        <p className="about">
          Funding freemium long tail hypotheses first mover advantage
          assets ownership
        </p>
        <div className="about2">
          <div className="contact contact-mobile">
            <i className="fa-regular fa-envelope" />
            <p>hello @ summituplife.com</p>
          </div>
          <div className="contact phone">
            <span><BsTelephone /></span>
            <p>+ 1049 10341 111</p>
          </div>
        </div>
      </div>
      <div className="social">
        <ul>
          <li>
            <i className="fa-brands fa-facebook" />
          </li>
          <li>
            <i className="fa-brands fa-instagram icon-global" />
          </li>
          <li>
            <i className="fa-brands fa-linkedin " />
          </li>
          <li>
            <i className="fa-brands fa-twitter icon-global" />
          </li>
        </ul>
      </div>
    </div>
    <div className="links">
      <ul>
        <li className="title">Services</li>
        <li>About</li>
        <li>Sumbit on issue</li>
        <li>Document</li>
        <li>Planning clean</li>
        <li>Company us</li>
      </ul>
      <ul>
        <li className="title">Support</li>
        <li>Pricing Plan</li>
        <li>Documentation</li>
        <li>Guide</li>
        <li>Tutorial</li>
      </ul>
      <ul>
        <li className="title">Company</li>
        <li>About</li>
        <li>Blog</li>
        <li>Join Us</li>
        <li>Press</li>
        <li>Partners</li>
      </ul>
      <ul>
        <li className="title">Legal</li>
        <li>Claim</li>
        <li>Privacy</li>
        <li>Document</li>
        <li>Terms</li>
      </ul>
    </div>
  </footer>
  )
}

export default Footer