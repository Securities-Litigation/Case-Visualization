// var request = require("request");
var db = require('../db/dbHandler.js');
var Input = require('../db/dbModels/inputs.dbModel.js');
// var query = Promise.promisify(db.query, {context: db});
// var insert = Promise.promisify(db.insert, {context: db});

module.exports = {
  simple: {
    get: () => {
      return {hello: 'world'};
    },
    post: (val) => {
      console.log('val is', val);
      var newInput = new Input(val);
      if (Input.find(newInput, (err, input) => { return input})) {
        console.log('Input already exists!');
        return 'Input already exists!';
      } else {
        return Input.save((err) => {
          if (err) throw err;
          console.log('Input saved successfully!');
          return 'Input saved successfully!';
        })
      };
    }
  }
};
