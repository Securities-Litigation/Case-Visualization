import React from 'react';
import Nav from './Nav.jsx';
import Foot from './Foot.jsx';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

export default class PageLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Nav />
        
        <div>
          {this.props.children}
        </div>

        <Foot />
      </div>
    );
  }
}
