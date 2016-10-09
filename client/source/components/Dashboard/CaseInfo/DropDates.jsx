import React from 'react';

export default class DropDates extends React.Component {
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
          <button onClick={(e) => {this.props.edit(path)}} type="button" className="centerItem btn-xs btn-danger">Delete</button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={(e) => {this.props.edit(path)}} type="button" className="btn-drop-l centerItem btn-xs btn-primary">Edit</button>
          <button onClick={(e) => {this.props.edit(path)}} type="button" className="btn-drop-r centerItem btn-xs btn-danger">Delete</button>
        </div>
      )
    }
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
          {Object.keys(this.props.data).map(function(date, key) {
            return (
              <tr key={key}>
                <td className="col-xs-4">{'Drop #' + (key + 1)}</td>
                <td className="centerText">{date}</td> 
                <td className="col-xs-4">{this.editToggle(this.props.editable[key + 1], ['drops', key + 1])}</td>
              </tr>
            )}.bind(this))
          }
        </tbody>
      </table>
    )
  }
}
