import React from 'react';
import Table from '../../Stateless/Table.jsx';

export default class CompanyInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Table {...this.props} onChange={this.props.onChange.bind(this)} editedInfo={this.state}/>
    )
  }
}
