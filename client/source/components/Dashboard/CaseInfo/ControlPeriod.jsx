import React from 'react';

export default class ControlPeriod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
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
            <td className="col-xs-4 centerText">{this.props.control.beg}</td> 
            <td className="col-xs-4"><button type="button" className="centerItem btn-xs btn-primary">Edit</button></td>
          </tr>

          <tr>
            <td className="col-xs-4">End</td>
            <td className="col-xs-4 centerText">{this.props.control.end}</td>
            <td className="col-xs-4"><button type="button" className="centerItem btn-xs btn-primary">Edit</button></td>
          </tr>

        </tbody>
      </table>
    )
  }
}