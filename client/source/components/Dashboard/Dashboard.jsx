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

  edit(arr, val, e) {
    //Find whether clicked item is currently editable
    var editVar = this.state.editable;
    arr.reduce(function(v1, v2) { 
      return editVar = editVar[v1][v2] 
    });
    
    //Create path to edit the "editable" status of clicked item
    var editObj = {};
    arr.reduce(function(v1, v2) { 
      return v2 !== arr[arr.length - 1] ? 
        v1[v2] = {} : 
        v1[v2] = {$set: !editVar}; 
    }, editObj);
    
    //Create path to edit the data of clicked item
    var dataObj = {};
    arr.reduce(function(v1, v2) { 
      return v2 !== arr[arr.length - 1] ? 
        v1[v2] = {} : 
        v1[v2] = {$set: val}; 
    }, dataObj);

    //If "editable", update data
    if (editVar) {
      this.setState({data: update(this.state.data, dataObj)});
    }

    //Change 'editable' state for clicked item
    this.setState({editable: update(this.state.editable, editObj)});
  }

  addDrop() {
    var newKey = Object.keys(this.state.data.drops).length + 1;
    var dataObj = {drops: {}};
    dataObj['drops'][newKey] = {$set: ''};
    this.setState({data: update(this.state.data, dataObj)});
  }

  deleteDrop(deletedDrop) {
    //Create copies of state objects to update and define update function
    var dataCopy = JSON.parse(JSON.stringify(this.state.data));
    var editCopy = JSON.parse(JSON.stringify(this.state.editable));
    var renameDrops = function(val, key, obj) { 
      if (val >= deletedDrop) { 
        obj[key + 1] = obj[val]; 
        delete obj[val]
      }
    }

    //Delete the clicked-on drop
    delete dataCopy.drops[deletedDrop];
    delete editCopy.drops[deletedDrop];

    //Rename all drops
    Object.keys(dataCopy.drops).forEach((val, key) => renameDrops(val, key, dataCopy.drops))
    Object.keys(dataCopy.drops).forEach((val, key) => renameDrops(val, key, editCopy.drops))

    this.setState({data: dataCopy})
    this.setState({editable: editCopy})
  }

  onChange(val, key) {
    var update = {};
    update[key] = val;
    this.setState(update);
  }

  render() {
    return (
      <div>
        <CaseName case={this.state.case} changeCase={this.changeCase.bind(this)} />

        <div className="col-md-6">
          <ClassPeriod data={this.state.data.class} editable={this.state.editable.class} edit={this.edit} category={'class'} name={'Class Period'} type={'date'} onChange={this.onChange}/>
          <ControlPeriod data={this.state.data.control} editable={this.state.editable.control} edit={this.edit} category={'control'} name={'Control Period'} type={'date'} onChange={this.onChange}/>
          <DropDates data={this.state.data.drops} editable={this.state.editable.drops} edit={this.edit} category={'drops'} name={'Drop Dates'} type={'date'} onChange={this.onChange} addDrop={this.addDrop} deleteDrop={this.deleteDrop}/>
          <CompanyInfo data={this.state.data.companyInfo} editable={this.state.editable.companyInfo} edit={this.edit} category={'companyInfo'} name={'Company Info'} type={'text'} onChange={this.onChange}/>
        </div>
      
      </div>
    )
  }
}
