import React from 'react';
import request from 'superagent';
import update from 'react-addons-update';
import CaseName from './CaseInfo/CaseName.jsx';
import ClassPeriod from './CaseInfo/ClassPeriod.jsx';
import ControlPeriod from './CaseInfo/ControlPeriod.jsx';
import DropDates from './CaseInfo/DropDates.jsx';
import CompanyInfo from './CaseInfo/CompanyInfo.jsx';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default class Listings extends React.Component {
  constructor(props) {
    super(props);

    this.edit = this.edit.bind(this);
    this.addDrop = this.addDrop.bind(this);
    this.deleteDrop = this.deleteDrop.bind(this);
    this.addScenario = this.addScenario.bind(this);
    this.deleteScenario = this.deleteScenario.bind(this);
    this.saveInputs = this.saveInputs.bind(this);
    
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
        scenarios: {
          1: {
            1: '2016-10-01', 
            2: '2016-10-01'
          },
          2: {
            1: '2016-10-02',
            2: '2016-10-02',
            3: '2016-10-02'
          },
          3: {
            1: '2016-10-03',
            2: '2016-10-03',
            3: '2016-10-03'
          },
          4: 'AddDrop'
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
        scenarios: {
          1: {
            1: false, 
            2: false
          },
          2: {
            1: false,
            2: false,
            3: false
          },
          3: {
            1: false,
            2: false,
            3: false
          },
          4: 'AddDrop'
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
    request
      .get('/case/' + e.target.value)
      .end(function(err, response){
        var resObj = JSON.parse(response.text)
        resObj = resObj[0];
        this.setState({data: resObj.data})
        this.setState({case: resObj.case})
      }.bind(this))
  }

  edit(arr, val, e) {
    //Find whether clicked item is currently editable
    var editVar = this.state.editable;
    arr.forEach(function(val) { 
      return editVar = editVar[val];
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

  addDrop(currScen) {
    var newKey = Object.keys(this.state.data.scenarios[currScen]).length + 1;
    var dataObj = {scenarios: {}};
    dataObj.scenarios[currScen] = {};
    dataObj.scenarios[currScen][newKey] = {$set: ''};
    this.setState({data: update(this.state.data, dataObj)});
  }

  deleteDrop(deletedDrop, currScen) {
    //Create copies of state objects to update and define update function
    var dataCopy = JSON.parse(JSON.stringify(this.state.data));
    var editCopy = JSON.parse(JSON.stringify(this.state.editable));
    var renameDrops = function(val, key, obj) { 
      if (val >= deletedDrop) { 
        obj[key + 1] = obj[val]; 
        delete obj[val];
      }
    }

    //Delete the clicked-on drop
    delete dataCopy.scenarios[currScen][deletedDrop];
    delete editCopy.scenarios[currScen][deletedDrop];

    //Rename all drops
    Object.keys(dataCopy.scenarios[currScen]).forEach((val, key) => renameDrops(val, key, dataCopy.scenarios[currScen]));
    Object.keys(dataCopy.scenarios[currScen]).forEach((val, key) => renameDrops(val, key, editCopy.scenarios[currScen]));

    this.setState({data: dataCopy});
    this.setState({editable: editCopy});
  }

  onChange(val, key) {
    var update = {};
    update[key] = val;
    this.setState(update);
  }

  deleteScenario(deletedScen) {
    //Create copies of state objects to update and define update function
    var dataCopy = JSON.parse(JSON.stringify(this.state.data));
    var editCopy = JSON.parse(JSON.stringify(this.state.editable));
    var renameScens = function(val, key, obj) { 
      if (val >= deletedScen) { 
        obj[key + 1] = obj[val]; 
        delete obj[val];
      }
    }

    //Delete the clicked-on drop
    delete dataCopy.scenarios[deletedScen];
    delete editCopy.scenarios[deletedScen];

    //Rename all drops
    Object.keys(dataCopy.scenarios).forEach((val, key) => renameScens(val, key, dataCopy.scenarios));
    Object.keys(editCopy.scenarios).forEach((val, key) => renameScens(val, key, editCopy.scenarios));
    
    console.log('dataCopy is', dataCopy);
    console.log('editCopy is', editCopy);

    this.setState({data: dataCopy});
    this.setState({editable: editCopy});
  }

  onChange(val, key) {
    var update = {};
    update[key] = val;
    this.setState(update);
  }

  addScenario() {
    //Create copies of state objects to update and define update function
    var dataCopy = JSON.parse(JSON.stringify(this.state.data));
    var editCopy = JSON.parse(JSON.stringify(this.state.editable));
    var numScens = Object.keys(dataCopy.scenarios).length;

    //Create new scenario equal to the last one
    dataCopy.scenarios[numScens] = dataCopy.scenarios[numScens - 1];
    dataCopy.scenarios[numScens + 1] = 'AddDrop';
    editCopy.scenarios[numScens] = editCopy.scenarios[numScens - 1];
    editCopy.scenarios[numScens + 1] = false;


    this.setState({data: dataCopy})
    this.setState({editable: editCopy})
  }

  saveInputs() {
    //TODO: change to 'PUT' after allowing 'POST' creation of new cases
    request
      .post('/case')
      .send(JSON.stringify({case: this.state.case, data: this.state.data}))
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .end(function(err, response){
        console.log('response.text is', response.text);
        console.log('response.body is', JSON.stringify(response.body));
      })
  }

  render() {
    return (
      <div>
        <CaseName case={this.state.case} changeCase={this.changeCase.bind(this)} />

        <div className="col-md-6">
          <button onClick={this.saveInputs.bind(this)} type="button" 
            className="centerItem btn-md btn-success">
            Save Inputs
          </button>
          <ClassPeriod data={this.state.data.class} editable={this.state.editable.class} edit={this.edit} category={'class'} name={'Class Period'} type={'date'} onChange={this.onChange}/>
          <ControlPeriod data={this.state.data.control} editable={this.state.editable.control} edit={this.edit} category={'control'} name={'Control Period'} type={'date'} onChange={this.onChange}/>
          <DropDates data={this.state.data.scenarios} editable={this.state.editable.scenarios} edit={this.edit} category={'scenarios'} name={'Drop Dates'} type={'date'} onChange={this.onChange} addDrop={this.addDrop} deleteDrop={this.deleteDrop} addScenario={this.addScenario} deleteScenario={this.deleteScenario}/>
          <CompanyInfo data={this.state.data.companyInfo} editable={this.state.editable.companyInfo} edit={this.edit} category={'companyInfo'} name={'Company Info'} type={'text'} onChange={this.onChange}/>
        </div>
      </div>
    )
  }
}
