import React from 'react';
import './VideoCard.scss';

const IMG = 'https://image.tmdb.org/t/p/w200/';

export function VideoCard({
  title,
  vote_average,
  release_date,
  overview,
  id,
  backdropPath,
  poster_path,
  bg,
}) {
  return (
    <div className="card-movie">
      <div className="card-movie__img">
        <img src={`${IMG}${poster_path}`} />
      </div>
      <h2>{title.length > 20 ? <>{title.slice(0, 23)}...</> : title} </h2>
      <p className={vote_average > 7 ? 'green' : 'red'}>{vote_average}</p>
      <p className="release-date">{release_date.slice(0, 4)}</p>
    </div>
  );
}
