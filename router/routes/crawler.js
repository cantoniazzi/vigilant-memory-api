module.exports = (app, service) => {
  
    app.post('/page-info', (req, res) => {
        service.getPageInfo(req.body.uri).then(function(infos) {
            res.status(200).send(infos);
        }).catch(function(error){
            res.status(500).send(error);
        });
    });
  
  };