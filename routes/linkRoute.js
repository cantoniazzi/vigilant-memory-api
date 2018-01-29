const express = require('express');
const router = express.Router();
const service = require('../services/linkService.js');

const _service = new service();

router.get('/', function (req, res, next) {
    res.status(200).send(_service.listAll());
});
    
module.exports = router;