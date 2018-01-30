const express = require('express');
const router = express.Router();
const service = require('../services/linkService.js');

const _service = new service();

router.get('/', function (req, res, next) {
    _service.listAll().then(function(links) {
        res.status(200).send(links);
    }).catch(function(error){
        res.status(500).send(error);
    });
});

// router.get('/:uuid', function (req, res, next) {
//     _service.getByUuid(req.params.uuid, function(error, success){
//         if(error){
//             res.status(500).send(error);
//         }
//         res.status(200).send(success);
//     });
// });

// router.post('/', function (req, res, next) {
//     _service.create(req.body, function(error, success){
//         if(error){
//             res.status(500).send(error);
//         }
//         res.status(201).send(success);
//     });
// });

// router.put('/:uuid', function (req, res, next) {
//     _service.update(req.params.uuid, req.body, function(error, success){
//         if(error){
//             res.status(500).send(error);
//         }
//         res.status(200).send(success);
//     });
// });

// router.delete('/:uuid', function (req, res, next) {
//     _service.delete(req.params.uuid, function(error, success){
//         if(error){
//             res.status(500).send(error);
//         }
//         res.status(200).send(success);
//     });
// });
    
module.exports = router;