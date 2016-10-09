import React from 'react';

export default class DropDates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th></th>
            <th className="col-xs-4 centerText">Drop Dates</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {this.props.drops.map(function(date, key) {
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
    )
  }
}
