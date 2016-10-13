// var db = require('./db/dbHandler.js');
// var query = Promise.promisify(db.query, {context: db});
// var request = require("request");
// var insert = Promise.promisify(db.insert, {context: db});

module.exports = {
  simple: {
    get: () => {
      return {hello: 'world'};
    },
    post: (val) => {
      return {valIs: val};
    }
  }
};
