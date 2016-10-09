import React from 'react';

export default class Listings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      case: 'Akorn',
      cases: ['Akorn', 'Petrobras', 'Rocket Fuel'],
      classBeg: '12/12/2012',
      classEnd: '12/12/2012',
      controlBeg: '12/12/2012',
      controlEnd: '12/12/2012',
      dropDates: ['12/12/12', '06/01/13'],
      ticker: 'AKRX',
      exchange: 'NASDAQ',
      percentReduction: 50
    };
  }

  onChange(e) {
    this.setState({case: e.target.value});
  }

  render() {
    return (
      <div>
        <div className="centerItem centerText">
          <h1>{this.state.case}</h1>
          <p>Select different case:</p>
          <select onChange={this.onChange.bind(this)}>
            {this.state.cases.map(function(val, key) {
              return <option value={val} key={key}>{val}</option>
            })}
          </select>
        </div>

        <div className="col-sm-6">
          <table className="table table-striped table-hover">

            <thead>
              <tr>
                <th className="col-xs-4"></th>
                <th className="col-xs-4 centerText">Class Period</th>
                <th className="col-xs-4"></th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="col-xs-4">Begin</td>
                <td className="col-xs-4 centerText">{this.state.classBeg}</td> 
                <td className="col-xs-4"><button type="button" className="centerItem btn-xs btn-primary">Edit</button></td>
              </tr>

              <tr>
                <td className="col-xs-4">End</td>
                <td className="col-xs-4 centerText">{this.state.classEnd}</td>
                <td className="col-xs-4"><button type="button" className="centerItem btn-xs btn-primary">Edit</button></td>
              </tr>

            </tbody>
          </table>

          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th className="col-xs-4"></th>
                <th className="col-xs-4 centerText">Control Period</th>
                <th className="col-xs-4"></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="col-xs-4">Begin</td>
                <td className="col-xs-4 centerText">{this.state.controlBeg}</td> 
                <td className="col-xs-4"><button type="button" className="centerItem btn-xs btn-primary">Edit</button></td>
              </tr>

              <tr>
                <td className="col-xs-4">End</td>
                <td className="col-xs-4 centerText">{this.state.controlEnd}</td>
                <td className="col-xs-4"><button type="button" className="centerItem btn-xs btn-primary">Edit</button></td>
              </tr>

            </tbody>
          </table>

          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th></th>
                <th className="col-xs-4 centerText">Drop Dates</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {this.state.dropDates.map(function(date, key) {
                return (
                  <tr key={key}>
                    <td className="col-xs-4">{'Drop #' + (key + 1)}</td>
                    <td className="centerText">{date}</td> 
                    <td className="col-xs-4">
                      <button type="col-xs-4 button" className="btn-drop-l btn-xs btn-primary">Edit</button>
                      <button type="col-xs-4 button" className="btn-drop-r btn-xs btn-danger">Delete</button>
                    </td>
                  </tr>
                )})
              }
            </tbody>
          </table>

          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th className="col-xs-4"></th>
                <th className="col-xs-4 centerText">Company Info</th>
                <th className="col-xs-4"></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="col-xs-4">Ticker</td>
                <td className="col-xs-4 centerText">{this.state.ticker}</td> 
                <td className="col-xs-4"><button type="button" className="centerItem btn-xs btn-primary">Edit</button></td>
              </tr>

              <tr>
                <td className="col-xs-4">Exchange</td>
                <td className="col-xs-4 centerText">{this.state.controlEnd}</td>
                <td className="col-xs-4"><button type="button" className="centerItem btn-xs btn-primary">Edit</button></td>
              </tr>

              <tr>
                <td className="col-xs-4">% Vol Reduction</td>
                <td className="col-xs-4 centerText">{this.state.percentReduction}</td>
                <td className="col-xs-4"><button type="button" className="centerItem btn-xs btn-primary">Edit</button></td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    )
  }
}