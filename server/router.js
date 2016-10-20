var router = require('express').Router();
var controller = require('./controllers/inputs.controller.js');

// router.get('/simple', controller.simple.get);
// router.post('/simple', controller.simple.post);

router.get('/case/:caseName', controller.case.get);
router.post('/case', controller.case.post);

module.exports = router;
