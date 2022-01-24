import React, { Component } from 'react';

import '../Trending/Trending.css';
import axios from 'axios';
import SingleContent from '../../components/SingleContent';
import BasicPagination from '../../components/Pagination/BasicPagination';

// import Pagination from '../../components/Pagination/AllPagination';

const API_URL_MOVIES = 'https://api.themoviedb.org/3/discover/movie?api_key=';

const API_KEY = process.env.REACT_APP_API_KEY;

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      movies: [],
      page: 1,
    };
  }

  getMovies = async () => {
    const { page } = this.state;

    this.setState({
      isLoading: true,
    });

    const movies = await axios.get(
      `${API_URL_MOVIES}${API_KEY}&language=ru&page=${page}`
    );

    console.log(movies.data);
    this.setState({
      isLoading: false,
      movies: movies.data.results,
      totalResult: movies.data.total_results,
    });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { movies, isLoading } = this.state;

    return (
      <main className="main">
        <div className="title">Фильмы</div>

        {isLoading ? (
          <div className="cssload-preloader">
            <span>З</span>
            <span>а</span>
            <span>г</span>
            <span>р</span>
            <span>у</span>
            <span>з</span>
            <span>к</span>
            <span>а</span>
          </div>
        ) : (
          <div className="trending">
            {movies &&
              movies.map((card) => (
                <SingleContent
                  key={card.id}
                  id={card.id}
                  poster={card.poster_path}
                  title={card.title || card.name}
                  date={card.first_air_date || card.release_date}
                  media_type={card.media_type}
                  vote_average={card.vote_average}
                />
              ))}
          </div>
        )}

        {/* <BasicPagination /> */}
      </main>
    );
  }
}
