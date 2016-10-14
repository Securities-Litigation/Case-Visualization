var model = require('../models/inputs.model.js');

module.exports = {
  simple: {
    get: (req, res) => { 
      const result = model.simple.get();
      res.status(200).send(result);
    },
    post: (req, res) => {
      const result = model.simple.post(req.body);
      res.status(200).send(JSON.stringify(result));
    }
  }
}
