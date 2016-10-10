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

    this.edit = this.edit.bind(this);
    this.addDrop = this.addDrop.bind(this);
    this.deleteDrop = this.deleteDrop.bind(this);
    
    this.state = {
      case: 'Akorn',
      data: {
        class: {
          beg: '2016-10-05',
          end: '2016-10-05'
        },
        control: {
          beg: '2016-10-05',
          end: '2016-10-05'
        },
        drops: {
          1: '2016-10-05', 
          2: '2016-10-05'
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

  addDrop() {
    var newKey = Object.keys(this.state.data.drops).length + 1;
    var dataObj = {drops: {}};
    dataObj['drops'][newKey] = {$set: ''};
    this.setState({data: update(this.state.data, dataObj)});
  }

  deleteDrop(key) {
    var dataCopy = JSON.parse(JSON.stringify(this.state.data));
    var editCopy = JSON.parse(JSON.stringify(this.state.editable));
    var newDropsData = {};
    var newDropsEdit = {};

    delete dataCopy.drops[key];
    delete editCopy.drops[key];
    Object.keys(dataCopy.drops).forEach(function(val, key) { newDropsData[key + 1] = dataCopy.drops[val]; })
    Object.keys(editCopy.drops).forEach(function(val, key) { newDropsEdit[key + 1] = editCopy.drops[val]; })
    dataCopy.drops = newDropsData;
    editCopy.drops = newDropsEdit;

    this.setState({data: dataCopy})
    this.setState({editable: editCopy})
  }

  render() {
    return (
      <div>
        <CaseName case={this.state.case} changeCase={this.changeCase.bind(this)} />

        <div className="col-md-6">
          <ClassPeriod data={this.state.data.class} editable={this.state.editable.class} edit={this.edit} category={'class'} name={'Class Period'} type={'date'}/>
          <ControlPeriod data={this.state.data.control} editable={this.state.editable.control} edit={this.edit}/>
          <DropDates data={this.state.data.drops} editable={this.state.editable.drops} edit={this.edit} addDrop={this.addDrop} deleteDrop={this.deleteDrop}/>
          <CompanyInfo data={this.state.data.companyInfo} editable={this.state.editable.companyInfo} edit={this.edit}/>
        </div>
      
      </div>
    )
  }
}