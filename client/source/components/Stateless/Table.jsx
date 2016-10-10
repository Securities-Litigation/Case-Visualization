import React from 'react';
import EditToggle from './EditToggle.jsx';

const Table = (props) => (
  <table className="table table-striped table-hover">
    <thead>
      <tr>
        <th></th>
        <th className="col-xs-4 centerText">{props.name}</th>
        <th></th>
      </tr>
    </thead>

    <tbody>
      {Object.keys(props.data).map(function(key, numKey) {
        return (
          <tr key={key}>
            <td className="col-xs-4">{key}</td>
            <td className="col-xs-4 centerText">{props.data[key]}</td> 
            <td className="col-xs-4">{EditToggle(props, key)}</td>
          </tr>
        )})
      }
    </tbody>
  </table>
);

module.exports = Table;
