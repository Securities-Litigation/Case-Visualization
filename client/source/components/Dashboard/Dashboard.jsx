import React from 'react';
import CaseName from './CaseInfo/CaseName.jsx';
import ClassPeriod from './CaseInfo/ClassPeriod.jsx';
import ControlPeriod from './CaseInfo/ControlPeriod.jsx';
import DropDates from './CaseInfo/DropDates.jsx';
import CompanyInfo from './CaseInfo/CompanyInfo.jsx';

export default class Listings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Akorn',
      class: {
        beg: '12/12/2012',
        end: '12/12/2012'
      },
      control: {
        beg: '12/12/2012',
        end: '12/12/2012'
      },
      drops: ['12/12/12', '06/01/13'],
      companyInfo: {
        ticker: 'AKRX',
        exchange: 'NASDAQ',
        percentReduction: 50
      }
    };
  }

  changeCase(e) {
    this.setState({name: e.target.value});
  }

  updateInfo(e, prop) {
    var update = {};
    update[prop] = e.target.value;
    this.setState(update);
  }

  render() {
    return (
      <div>
        <CaseName name={this.state.name} changeCase={this.changeCase.bind(this)} />

        <div className="col-sm-6">
          <ClassPeriod class={this.state.class} />
          <ControlPeriod control={this.state.control} />
          <DropDates drops={this.state.drops} />
          <CompanyInfo companyInfo={this.state.companyInfo} />
        </div>
      
      </div>
    )
  }
}