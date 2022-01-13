import React, { Component } from 'react';
import './Main.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export class Main extends Component {
  render() {
    return (
      <Router>
        <main className="main">
          <div className="main__container container">
            <Switch>
              <Route path="/">
                <VideoCards />
              </Route>
            </Switch>
          </div>
        </main>
      </Router>
    );
  }
}
