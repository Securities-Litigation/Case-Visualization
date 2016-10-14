var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var inputSchema = new Schema({
  case: { type: String, required: true, unique: true },
  data: {
    class: {
      beg: { type: Date, required: true },
      end: { type: Date, required: true }
    },
    control: {
      beg: { type: Date, required: true },
      end: { type: Date, required: true }
    },
    scenarios: {
      1: {
        1: Date, 
      },
      2: {
        1: Date,
        2: Date
      },
      3: {
        1: Date,
        2: Date,
        3: Date
      },
      4: String
    },
    companyInfo: {
      ticker: { type: String, required: true },
      exchange: String,
      percentReduction: Number
    }
  }
});

var Input = mongoose.model('Input', inputSchema);
module.exports = Input;
