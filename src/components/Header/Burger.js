import React, { Component } from 'react';

let BURGER = document.querySelector('.burger');
let NAV_MENU = document.querySelector('.nav__menu');

export default class Burger extends Component {
  mobile = () => {
    BURGER.classList.toggle('active2');
    NAV_MENU.classList.toggle('active2');
  };

  render() {
    return (
      <div className="burger" onClick={this.mobile}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    );
  }
}
