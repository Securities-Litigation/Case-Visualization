// var request = require("request");
var db = require('../db/dbHandler.js');
var Input = require('../db/dbModels/inputs.dbModel.js');
var Promise = require('bluebird');
// var query = Promise.promisify(db.query, {context: db});
// var insert = Promise.promisify(db.insert, {context: db});

module.exports = {
  case: {
    get: (caseName) => {
      return Input.find({case: caseName}, (err, input) => { 
        if (err) throw err;
        return input;
      });
    },
    post: (caseObj) => {
      //This will either update an existing doc or save a new one
      return new Promise(function(resolve, reject) {
        Input.findOneAndUpdate({case: caseObj.case}, caseObj, {new: true}, (err, doc) => {
          if (err) throw err;
          resolve(doc);
        })
      }).then((res) => { 
        return res;
      });
    }
  }
};
