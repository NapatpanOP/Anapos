import React, { Component, useState } from 'react'
import { MenuItems } from "./MenuItems"
import Button from 'react-bootstrap/Button'
import './Nevbar.css'
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuthContext } from '../../core/contexts/AuthProvider';
import { Icon } from '@material-ui/core';
import logo from '../../assets/Logo.png'

const Nevbar = () => {
  const { token, AuthAction, adminToken } = useAuthContext();
  const currentLocation = useLocation();
  var loginUser = token;
  // console.log(token)
  const state = { clicked: false }

  const handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [mode, setMode] = useState('user')

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const adminPathList = [
    '/conclusion',
    '/admin-userdata',
    '/admin-suggestion'
  ]

  const renderButton = () => {
    if (mode == 'user') {
      if (!token) {
        return <Link to="../Login" if>
          <Button id='bt-login'>Log in</Button>
        </Link>
      } else {
        return <><Dropdown
          open={open}
          trigger={<button onClick={handleOpen} className='web-btn'><div className='circle-icon'><strong>{token.username.charAt(0).toUpperCase()}</strong></div></button>}
          menu={[
            <Button onClick={() => AuthAction.onLogout()} id='bt-logout'>Log out</Button>
          ]}
        /> <Button className='mobile-btn' onClick={() => AuthAction.onLogout()} id='bt-logout'>Log out</Button></>
      }
    } else {
        return <><Dropdown
          open={open}
          trigger={<button className='web-btn' onClick={handleOpen}><div className='circle-icon'><strong>{adminToken.email.charAt(0).toUpperCase()}</strong></div></button>}
          menu={[
            <Button onClick={() => AuthAction.onAdminLogout()} id='bt-logout'>Log out</Button>
          ]}
        /><Button className='mobile-btn' onClick={() => AuthAction.onAdminLogout()} id='bt-logout'>Log out</Button></>
    }
  }
  const { pathname } = useLocation();


  useEffect(() => {
    setMode((adminPathList.indexOf(currentLocation.pathname) == -1 ? 'user' : 'admin'))
  }, [currentLocation.pathname]);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuOne = () => {
    // do something
    setOpen(false);
  };

  const handleMenuTwo = () => {
    // do something
    setOpen(false);
  };

  const Dropdown = ({ open, trigger, menu }) => {
    return (
      <div className="dropdown-login">
        {trigger}
        {open ? (
          <ul className="menu">
            {menu.map((menuItem, index) => (
              <li key={index} className="menu-item">{menuItem}</li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          {MenuItems.map((item, index) => {
            if (item.permission == mode)
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
