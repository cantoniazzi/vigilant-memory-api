const express = require('express');
const router = express.Router();
const service = require('../services/linkService.js');

const _service = new service();

router.get('/', function (req, res, next) {
    _service.listAll(function(error, success){
        if(error){
            res.status(500).send(error);
        }
        res.status(200).send(success);
    });
});
    
module.exports = router;