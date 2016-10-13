var MongoClient = require('mongodb').MongoClient;
var initialCase = {
  case: 'Akorn',
  data: {
    class: {
      beg: '2012-01-01',
      end: '2015-12-31'
    },
    control: {
      beg: '2015-01-01',
      end: '2015-12-31'
    },
    scenarios: {
      1: {
        1: '2016-01-02', 
      },
      2: {
        1: '2016-10-02',
        2: '2016-01-15'
      },
      3: {
        1: '2016-10-02',
        2: '2016-01-15',
        3: '2016-01-18'
      },
      4: 'AddDrop'
    },
    companyInfo: {
      ticker: 'AKRX',
      exchange: 'NASDAQ',
      percentReduction: 50
    }
  }
};

MongoClient.connect("mongodb://localhost:27017/SecLit", function(err, db) {
  if (!err) { console.log("Connected to mongodb"); }
  db.createCollection('inputData', function(err, collection) {});
  var inputs = db.collection('inputData');
  inputs.insert(initialCase, {w:1}, function(err, result) {});
});





