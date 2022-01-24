import React from 'react';
import './Search.scss';

export default function Search() {
  return (
    <section className="search">
      <div className="search__container container">
        <form action="#" className="search__form">
          <input
            className="search__input"
            type="text"
            placeholder="Поиск фильмов"
          />
          <button className="search__btn">Найти</button>
        </form>
      </div>
    </section>
  );
}
