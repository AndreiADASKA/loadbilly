import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <ul className="nav__menu">
      <li className="nav__item">
        <NavLink to="/Movies" className="nav__link">
          Фильмы
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink to="/Series" className="nav__link">
          Сериалы
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink to="/" className="nav__link">
          В тренде
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink to="/Search" className="nav__link">
          Поиск
        </NavLink>
      </li>
      <li className="nav__item">
        <Link to="/login" className="nav__link">
          Log in
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/sign-up" className="nav__link">
          Sign Up
        </Link>
      </li>
    </ul>
  );
}
