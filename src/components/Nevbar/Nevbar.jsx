import React, { Component } from 'react'
import { MenuItems } from "./MenuItems"
import { Button } from '../Button'
import './Nevbar.css'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';


const Nevbar = () => {
  const navigate = useNavigate();
  var loginUser = localStorage.getItem('user') ?? false;
  console.log(loginUser)
  const state = { clicked: false }

  const handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }
  const logoutHandle = () => {
    localStorage.clear()
    navigate('/')
  }
  const renderButton = () => {
    if(!loginUser)
       return <Link to="../Login" if>
       <Button>Log in</Button>
     </Link>;
    return <Button onClick={() => logoutHandle()}>Log out</Button>
  ;
 }
  const { pathname } = useLocation();

  useEffect(() => {
    loginUser = JSON.parse(localStorage.getItem('user')) ?? false;
    console.log(loginUser)
  }, [pathname]);

    return(
      <nev className="NevbarItems">
        <img className="nevbar-logo" src="./src/assets/Logo.png" alt="Logo"/>
        <div className="menu-icon" onClick={() => handleClick()}>
          <i className={state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={state.clicked  ? 'nav-menu active' : 'nev-menu'}>
          { MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}

        </ul>
        {renderButton()}
        {/* <Link to="../Login" if>
          <Button>Log in</Button>
        </Link> */}
      </nev>
    )
  }


export default Nevbar