import React from 'react';

export default class ClassPeriod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  editToggle(bool, path) {
    if (bool) {
      return (
        <div>
          <div className="col-xs-9"><input className="form-control" id="focusedInput" type="date" /></div>
          <button onClick={(e) => {this.props.edit(path)}} type="button" className="centerItem btn-xs btn-primary">Update</button>
        </div>
      );
    } else {
      return <button onClick={(e) => {this.props.edit(path)}} type="button" className="centerItem btn-xs btn-primary">Edit</button>
    }
  }

  render() {
    return (
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
            <td className="col-xs-4 centerText">{this.props.data.beg}</td> 
            <td className="col-xs-4">{this.editToggle(this.props.editable.beg, ['class', 'beg'])}</td>
          </tr>

          <tr>
            <td className="col-xs-4">End</td>
            <td className="col-xs-4 centerText">{this.props.data.end}</td>
            <td className="col-xs-4">{this.editToggle(this.props.editable.end, ['class', 'end'])}</td>
          </tr>

        </tbody>
      </table>
    )
  }
}
