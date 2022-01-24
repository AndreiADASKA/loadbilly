import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="header__nav">
      <ul className="header__list">
        <li>
          <Link to="/Movies">Фильмы</Link>
        </li>
        <li>
          <Link to="/Series">Сериалы</Link>
        </li>
        <li>
          <Link to="/">В тренде</Link>
        </li>
        <li>
          <Link to="/Favorit">Фаворит</Link>
        </li>
        <li>
          <Link to="/Search">Поиск</Link>
        </li>
      </ul>
    </nav>
  );
}
