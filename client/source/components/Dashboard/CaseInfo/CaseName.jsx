import React from 'react';

export default class CaseName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cases: ['Akorn', 'Petrobras', 'Rocket Fuel']
    }
  }

  render() {
    return (
      <div className="centerItem centerText">
        <h1>{this.props.name}</h1>
        <p>Select different case:</p>
        <select onChange={this.props.changeCase}>
          {this.state.cases.map(function(val, key) {
            return <option value={val} key={key}>{val}</option>
          })}
        </select>
      </div>
    )
  }
}
