import React, { useState } from 'react'
import './Navigation.css';
import { Link } from 'react-router-dom';
function Header() {
    const [showHambureger, setShowHambureger] = useState(false)
  return (
    <>
      {/* ======= Header ======= */}
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <a href="/">MWFT</a>
          </h1>
          
          <nav id="navbar" className={`navbar ${showHambureger?"navbar-mobile":""}`}>
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#service">
                  Services
                </a>
              </li>
              <li>
                <a className="nav-link scrollto " href="#OurCoreValue">
                  OurCoreValue
                </a>
              </li>
             
              <li>
                <a className="nav-link scrollto" href="#team">
                  Team
                </a>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/careers">
                  Careers
                </Link>
              </li>
              <li>
                <a className="getstarted scrollto" href="#about">
                  Get Started
                </a>
              </li>
            </ul>
            <i className={`bi ${showHambureger?"bi-x":"bi-list"} mobile-nav-toggle `} onClick={e => setShowHambureger(!showHambureger)}/>
          </nav>
          
        </div>
      </header>
      <>
    
</>

      
    </>

  )
}

export default Header