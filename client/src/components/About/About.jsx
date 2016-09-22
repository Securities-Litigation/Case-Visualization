import React from 'react';

export default function About(props) {
  return (
    <div id="about" className="container">
      <div className="jumbotron">
        <h2>Litigation Valuations<br />
          <small>Preliminary Analyses of Securities-Litigation, Class-Action Lawsuits</small>
        </h2>
      </div>
      <div>
        <div className="col-xs-4 col-xs-offset-4 text-center"><GitHub username="08martinm" />Matt Martin</div>
        <p>
          <strong>Matthew Martin, CFA</strong>
          Having worked for The J.P. Morgan Private Bank's Hedge Fund Principals Group and Stanford 
          Consulting Group, Inc., Matt possesses a strong technical background and excellent financial modeling
          skills. Combined technical and full-stack software engineering expertise have led to the creation of 
          a smarter, faster, and more precise methodology to value class-action, securities-fraud lawsuits.
        </p>
      </div>     
    </div>
  )
}

class GitHub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {}
    };
    this.getGitHubStuff(props.username);
  }

  getGitHubStuff(username) {
    return fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(profile => { this.setState({profile}) })
    .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <img className="img-circle" src={this.state.profile.avatar_url} />
      </div>
    )
  }
}