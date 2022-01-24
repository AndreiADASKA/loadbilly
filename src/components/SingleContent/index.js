import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NO_POSTER from '../../img/noposter.jpg';
import './SingleContent.css';
const POSTER_URL_500 = 'https://image.tmdb.org/t/p/w500/';
const POSTER_URL_300 = 'https://image.tmdb.org/t/p/w300/';

export default function SingleContent({
  key,
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) {
  return (
    <Link to={`/movie/${id}`} className="card-movie">
      <div className="card-movie__img">
        <img
          src={poster ? `${POSTER_URL_300}/${poster}` : NO_POSTER}
          alt="title"
        />
      </div>

      <h2 className="card-movie__title">
        {title.length > 15 ? <>{title.slice(0, 16)}...</> : title}
      </h2>
      <p
        className={
          vote_average > 7
            ? 'card-movie__averagegreen'
            : 'card-movie__averagered'
        }
      >
        {vote_average}
      </p>

      <p>{media_type === 'movie' ? 'Фильм' : 'Сериал'}</p>
      <p className="card-movie__year">{date.slice(0, 4)}</p>
    </Link>
  );
}
