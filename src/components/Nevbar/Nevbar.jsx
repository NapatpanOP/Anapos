import React, { Component } from 'react'
import { MenuItems } from "./MenuItems"
import { Button } from '../Button'
import './Nevbar.css'
import { Link } from 'react-router-dom';


class Nevbar extends React.Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return(
      <nev className="NevbarItems">
        <img className="nevbar-logo" src="./src/assets/Logo.png" alt="Logo"/>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked  ? 'nav-menu active' : 'nev-menu'}>
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
        <Link to="../Login">
          <Button>Log in</Button>
        </Link>
      </nev>
    )
  }
}

export default Nevbar