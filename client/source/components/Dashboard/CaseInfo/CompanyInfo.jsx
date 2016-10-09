import React from 'react';

export default class CompanyInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  editToggle(props, path) {
    if (props.editable[path[path.length - 1]]) {
      return (
        <div>
          <div className="col-xs-9"><input className="form-control" id="focusedInput" name={path[path.length - 1]} type="text" onChange={(e) => this.onChange(e.target.value, path[path.length - 1])} /></div>
          <button onClick={() => {props.edit(path, this.state[path[path.length - 1]])}} type="button" className="centerItem btn-xs btn-primary">Update</button>
        </div>
      );
    } else {
      return <button onClick={() => {props.edit(path)}} type="button" className="centerItem btn-xs btn-primary">Edit</button>
    }
  }

  onChange(val, key) {
    var update = {};
    update[key] = val;
    this.setState(update);
  }

  render() {
    return (
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
            <td className="col-xs-4 centerText">{this.props.data.ticker}</td> 
            <td className="col-xs-4">{this.editToggle(this.props, ['companyInfo', 'ticker'])}</td>
          </tr>

          <tr>
            <td className="col-xs-4">Exchange</td>
            <td className="col-xs-4 centerText">{this.props.data.exchange}</td>
            <td className="col-xs-4">{this.editToggle(this.props, ['companyInfo', 'exchange'])}</td>
          </tr>

          <tr>
            <td className="col-xs-4">% Vol Reduction</td>
            <td className="col-xs-4 centerText">{this.props.data.percentReduction}</td>
            <td className="col-xs-4">{this.editToggle(this.props, ['companyInfo', 'percentReduction'])}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}
