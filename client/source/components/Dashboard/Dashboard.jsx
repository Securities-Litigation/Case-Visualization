import React from 'react';
import update from 'react-addons-update';
import CaseName from './CaseInfo/CaseName.jsx';
import ClassPeriod from './CaseInfo/ClassPeriod.jsx';
import ControlPeriod from './CaseInfo/ControlPeriod.jsx';
import DropDates from './CaseInfo/DropDates.jsx';
import CompanyInfo from './CaseInfo/CompanyInfo.jsx';

export default class Listings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      case: 'Akorn',
      data: {
        class: {
          beg: '12/12/2012',
          end: '12/12/2012'
        },
        control: {
          beg: '12/12/2012',
          end: '12/12/2012'
        },
        drops: {
          1: '12/12/12', 
          2: '06/01/13'
        },
        companyInfo: {
          ticker: 'AKRX',
          exchange: 'NASDAQ',
          percentReduction: 50
        }
      },
      editable: {
        name: false,
        class: {
          beg: false,
          end: false
        },
        control: {
          beg: false,
          end: false
        },
        drops: {
          1: false, 
          2: false
        },
        companyInfo: {
          ticker: false,
          exchange: false,
          percentReduction: false
        }
      }
    };
  }

  changeCase(e) {
    this.setState({case: e.target.value});
  }

  edit(arr, val) {
    //Find & store "edit" boolean
    var editVar = this.state.editable; arr.reduce(function(v1, v2) { return editVar = editVar[v1][v2] });

    //Create nested object to change only what's needed in state with react-addon 'update'
    var editObj = {};
    var dataObj = {};
    arr.reduce(function(v1, v2) { return v2 !== arr[arr.length - 1] ? v1[v2] = {} : v1[v2] = {$set: !editVar}; }, editObj);
    arr.reduce(function(v1, v2) { return v2 !== arr[arr.length - 1] ? v1[v2] = {} : v1[v2] = {$set: val}; }, dataObj);

    if (editVar) {
      this.setState({data: update(this.state.data, dataObj)});
    }
    //Change 'edit' state for clicked item
    this.setState({editable: update(this.state.editable, editObj)});
  }

  render() {
    return (
      <div>
        <CaseName case={this.state.case} changeCase={this.changeCase.bind(this)} />

        <div className="col-md-6">
          <ClassPeriod data={this.state.data.class} editable={this.state.editable.class} edit={this.edit.bind(this)}/>
          <ControlPeriod data={this.state.data.control} editable={this.state.editable.control} edit={this.edit.bind(this)}/>
          <DropDates data={this.state.data.drops} editable={this.state.editable.drops} edit={this.edit.bind(this)}/>
          <CompanyInfo data={this.state.data.companyInfo} editable={this.state.editable.companyInfo} edit={this.edit.bind(this)}/>
        </div>
      
      </div>
    )
  }
}