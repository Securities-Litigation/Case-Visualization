import React from 'react';

const EditToggle = (props, key) => {
  if (props.editable[key]) {
    return (
      <div>
        <div className="col-xs-9">

          <input 
            className="form-control" 
            id="focusedInput" 
            type={props.type} 
            name={key} 
            onChange={(e) => props.onChange(e.target.value, key)}
          />

        </div>

        <button 
          onClick={(e) => {props.edit([props.category, key], props.editedInfo[key], e)}} 
          type="button" 
          className="centerItem btn-xs btn-primary">
        Update
        </button>
      </div>
    );

  } else {

    return (
      <button 
        onClick={(e) => {props.edit([props.category, key], null, e)}} 
        type="button" 
        className="centerItem btn-xs btn-primary">
      Edit
      </button>
    )
  }
}

module.exports = EditToggle;
