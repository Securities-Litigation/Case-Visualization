import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default class DropDates extends React.Component {
  constructor(props) {
    super(props);
    this.editToggle = this.editToggle.bind(this);
    this.changeScenario = this.changeScenario.bind(this);
    this.deleteScenario = this.deleteScenario.bind(this);
    this.state = {
      currScen: 1
    }
  }

  editToggle(bool, path) {
    if (bool) {
      return (
        <div>
          <div className="col-xs-9">
            <input 
              className="form-control" 
              id="focusedInput" 
              type="date" 
              name={path[path.length - 1]} 
              onChange={(e) => this.onChange(e.target.value, path[path.length - 1])}
            />
          </div>

          <button 
            onClick={(e) => {this.props.edit(path, this.state[path[path.length - 1]])}} 
            type="button" 
            className="centerItem btn-xs btn-primary">
            Update
          </button>

          <button 
            onClick={(e) => {this.props.edit(path)}} 
            type="button" 
            className="centerItem btn-xs btn-danger">
            Delete
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button 
            onClick={(e) => {this.props.edit(path)}} 
            type="button" 
            className="btn-drop-l centerItem btn-xs btn-primary">
            Edit
          </button>

          <button 
            onClick={(e) => {this.props.deleteDrop(path[path.length - 1], this.state.currScen)}} 
            type="button" 
            className="btn-drop-r centerItem btn-xs btn-danger">
            Delete
          </button>
        </div>
      )
    }
  }

  onChange(val, key) {
    var update = {};
    update[key] = val;
    this.setState(update);
  }

  changeScenario(index, last) {
    if (index + 1 === Object.keys(this.props.data).length) {
      this.props.addScenario();
    } else {
      this.setState({currScen: index + 1})
    }
  }

  deleteScenario() {
    this.props.deleteScenario(this.state.currScen);
    this.changeScenario(0, 0);
  }

  render() {
    return (
      <div>
        <Tabs onSelect={this.changeScenario}>

          <TabList>
            {Object.keys(this.props.data).map(function(scenKey, scenNum) {
              if (scenNum === Object.keys(this.props.data).length - 1) {
                return <Tab key={scenKey}>{'+'}</Tab>
              }
              return <Tab key={scenNum}>{'Scenario #' + scenKey}</Tab>;
            }.bind(this))}
          </TabList>

          {Object.keys(this.props.data).map(function(scenKey, scenNum) {
            if (scenNum === Object.keys(this.props.data).length - 1) {
              return <TabPanel key={scenKey}><div></div></TabPanel>
            }
            return (
              <TabPanel key={scenKey}>
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th></th>
                      <th className="col-xs-4 centerText">Drop Dates</th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody>
                    {Object.keys(this.props.data[this.state.currScen]).map(function(key, numKey) {
                      return (
                        <tr key={key}>
                          <td className="col-xs-4">{'Drop #' + (numKey+1)}</td>
                          <td className="centerText">{this.props.data[this.state.currScen][numKey+1]}</td> 
                          <td className="col-xs-4">
                            {this.editToggle(this.props.editable[this.state.currScen][numKey+1], ['scenarios', this.state.currScen, key])}
                          </td>
                        </tr>
                      )}.bind(this))
                    }
                  </tbody>
                </table>
                <div className="">
                  <button onClick={() => {this.props.addDrop(this.state.currScen)}} type="button" 
                    className="centerItem btn-md btn-success">
                    Add Drop
                  </button>
                  <button onClick={this.deleteScenario} type="button" 
                    className="centerItem btn-md btn-danger">
                    Delete Scenario
                  </button>
                </div>

              </TabPanel>
            )
          }.bind(this))}
        </Tabs>
      </div>
    )
  }
}
