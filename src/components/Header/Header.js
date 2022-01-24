import React from 'react';
import './Header.scss';

import { BsFillCameraReelsFill as LogoIcon } from 'react-icons/bs';
export function Header() {
  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__logo">
          <a href="#logo" className="header__logo-link">
            <span>LOAD BILLY</span>

            <span className="header__logo-icon">
              <LogoIcon />
            </span>
          </a>
        </div>
        <nav className="header__nav">
          <ul className="header__list">
            <li>
              <a href="#главная">Комедии</a>
            </li>
            <li>
              <a href="#главная">Боевики</a>
            </li>
            <li>
              <a href="#главная">Драма</a>
            </li>
          </ul>
        </nav>
        <div>
          <a className="header__login" href="#Войти">
            Войти
          </a>
        </div>
      </div>
    </header>
  );
}
