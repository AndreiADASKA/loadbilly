import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import { Footer } from './components/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
