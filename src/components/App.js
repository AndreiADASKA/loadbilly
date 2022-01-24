import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Movies from '../Pages/Movies';
import Search from '../Pages/Search';
import Series from '../Pages/Series';
import Trending from '../Pages/Trending';
import Footer from './Footer';
import Header from './Header';
import Movie from '../Pages/Movie';
import Login from './Login';
import SignUp from './SignUp';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
  }
  render() {
    return (
      <Router>
        <div className="container wrapper">
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />

            <Route path="/Series" element={<Series />} />
            <Route path="/" element={<Trending />} />
            <Route path="/Movies" element={<Movies />} />
            <Route path="/Search" element={<Search />} />

            <Route path="/movie/:id" element={<Movie />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
}
