import React, { Component } from 'react';
import './Header.css';
import { BsFillCameraReelsFill as LogoIcon } from 'react-icons/bs';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import Burger from './Burger';

export default class Header extends Component {
  windowsScroll = () => {
    window.scroll(0, 0);
  };
  render() {
    return (
      <header className="header">
        <nav className="navbar">
          <a href="#logo" className="nav__logo" onClick={this.windowsScroll}>
            LOAD BILLY
          </a>
          <Navigation />
          <Burger />
        </nav>
      </header>
    );
  }
}
