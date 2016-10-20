var Promise = require('bluebird');
var utils = require('../config/utils.js');
var model = require('../models/inputs.model.js');
var moment = require('moment');

module.exports = {
  case: {
    get: (req, res) => { 
      new Promise(function(resolve, reject) {
        resolve(model.case.get(req.params.caseName))
      }).then(result => {
        res.status(200).send(JSON.stringify(result));
      })
    },
    post: (req, res) => {
      new Promise(function(resolve, reject) {
        resolve(model.case.post(req.body))
      }).then(result => {
        res.status(200).send(JSON.stringify(formattedRes));
      })
    }
  }
}
