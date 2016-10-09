import React from 'react';

export default class CompanyInfo extends React.Component {
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
            <th className="col-xs-4 centerText">Company Info</th>
            <th className="col-xs-4"></th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="col-xs-4">Ticker</td>
            <td className="col-xs-4 centerText">{this.props.companyInfo.ticker}</td> 
            <td className="col-xs-4"><button type="button" className="centerItem btn-xs btn-primary">Edit</button></td>
          </tr>

          <tr>
            <td className="col-xs-4">Exchange</td>
            <td className="col-xs-4 centerText">{this.props.companyInfo.exchange}</td>
            <td className="col-xs-4"><button type="button" className="centerItem btn-xs btn-primary">Edit</button></td>
          </tr>

          <tr>
            <td className="col-xs-4">% Vol Reduction</td>
            <td className="col-xs-4 centerText">{this.props.companyInfo.percentReduction}</td>
            <td className="col-xs-4"><button type="button" className="centerItem btn-xs btn-primary">Edit</button></td>
          </tr>
        </tbody>
      </table>
    )
  }
}
