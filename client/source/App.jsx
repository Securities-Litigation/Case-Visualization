import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import PageLayout from './components/Layout/PageLayout.jsx';
import Login from './components/Login/Login.jsx';
import About from './components/About/About.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';

export default class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={PageLayout}>
          <IndexRoute component={Dashboard} />
          <Route path="/" component={Dashboard} />
          <Route path="login" component={Login} />
          <Route path="about" component={About} />
        </Route>
      </Router>
    );
  }
}
