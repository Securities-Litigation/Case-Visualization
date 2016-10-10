import React from 'react';
import Table from '../../Stateless/Table.jsx';

export default class ClassPeriod extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {}
  }

  onChange(val, key) {
    var update = {};
    update[key] = val;
    this.setState(update);
  }

  render() {
    return (
      <Table {...this.props} onChange={this.onChange} editedInfo={this.state}/>
    )
  }
}
