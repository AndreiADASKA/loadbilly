import React, { Component } from 'react';
import axios from 'axios';
import SingleContent from '../../components/SingleContent';

const API_URL_SEARCH = 'https://api.themoviedb.org/3/search/multi?api_key=';
const API_KEY = process.env.REACT_APP_API_KEY;

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: '',
      isLoading: false,
      movies: [],
      page: 1000,
    };
  }

  handleSearchChange = (e) => {
    this.setState({
      searchQuery: e.target.value,
    });
  };

  getSearch = async () => {
    const { searchQuery } = this.state;
    const movies = await axios.get(
      `${API_URL_SEARCH}${API_KEY}&language=ru-RU&page=1&include_adult=false&query=${searchQuery}`
    );

    console.log(movies.data);
    this.setState({
      isLoading: true,
      movies: movies.data.results,
    });
  };

  handleSearchSubmit = (e) => {
    if (e.key !== 'Enter') {
      return;
    }

    this.setState(
      {
        isLoading: true,
      },
      this.getSearch
    );
  };

  render() {
    const { searchQuery, movies, isLoading } = this.state;
    return (
      <div className="main">
        <div className="title">Поиск</div>
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={searchQuery}
          onChange={this.handleSearchChange}
          onKeyDown={this.handleSearchSubmit}
        />

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
      </div>
    );
  }
}
