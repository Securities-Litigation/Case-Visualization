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
        <h2 className="aboutName centerItem">Preliminary Damages Analyses</h2>
        <p className="aboutDescription">
          Company insiders are legally barred from making false or misleading statements that artificially 
          inflate their company’s securities prices. News of such behavior typically results in a sharp 
          decline in these securities prices, incurring losses to investors. To recoup monetary damages, 
          investors may file a class action lawsuit against the company and its management.
          <br />
          <br />
          Using empirical techniques developed in the academic literature on financial economics, I estimate damages
          incurred as a result of Defendants’ fraudulent conduct. Generally speaking, I employ arbitrage pricing theory
          to model the security’s expected return as a function of relevant risk factors that influenced prices as the 
          fraud was revealed to the market. A baseline analysis might involve removing systematic market and industry effects 
          to isolate the company-specific returns on corrective disclosure dates. We combine the company-specific returns with 
          proprietary models of investor trading behavior to then calculate class-wide damages.
        </p>

        <GitHub username="08martinm" />
        <h2 className="aboutName centerItem">Matthew Martin, CFA</h2>        
        <p className="aboutDescription">
          Having worked for The J.P. Morgan Private Bank's Hedge Fund Principals Group and Stanford 
          Consulting Group, Inc., Matt possesses a strong technical background and financial modeling
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
        <img className="aboutPhoto centerItem" src={this.state.profile.avatar_url} />
      </div>
    )
  }
}