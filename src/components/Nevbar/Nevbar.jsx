import React, { Component, useState } from 'react'
import { MenuItems } from "./MenuItems"
import { Button } from '../Button'
import './Nevbar.css'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuthContext } from '../../core/contexts/AuthProvider';

const Nevbar = () => {
  const { token, AuthAction } = useAuthContext();
  const navigate = useNavigate();
  var loginUser = token;
  console.log(token)
  const state = { clicked: false }

  const handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
  const renderButton = () => {
    if(!token)
       return <Link to="../Login" if>
       <Button>Log in</Button>
     </Link>;
    return <Button onClick={() => AuthAction.onLogout()}>Log out</Button>
      ;
  }
  const { pathname } = useLocation();

  
  // useEffect(() => {
  //   loginUser = JSON.parse(localStorage.getItem('user')) ?? false;
  //   console.log(loginUser)
  // }, [pathname]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="./src/assets/Logo.png" alt="Logo" />
      </div>
      <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul >
          {MenuItems.map((item, index) => {
            return (
              <li key={index} className={location.pathname == item.url ? 'active' : ''}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}

        </ul>
        {renderButton()}
      </div>
      <div className={`${isMenuOpen ? 'navbar-hamburger open' : 'navbar-hamburger'}`} onClick={handleMenuToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
    // <nav className="NevbarItems">
    //   <img className="nevbar-logo" src="./src/assets/Logo.png" alt="Logo"/>
    //   <div className="menu-icon" onClick={() => handleClick()}>
    //     <i className={state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
    //   </div>
    // <ul className={state.clicked  ? 'nav-menu active' : 'nev-menu'}>
    //   { MenuItems.map((item, index) => {
    //     return (
    //       <li key={index}>
    //         <a className={item.cName} href={item.url}>
    //           {item.title}
    //         </a>
    //       </li>
    //     )
    //   })}

    // </ul>
    //   {renderButton()}
    //   {/* <Link to="../Login" if>
    //     <Button>Log in</Button>
    //   </Link> */}
    // </nav>
  )
}


export default Nevbar
