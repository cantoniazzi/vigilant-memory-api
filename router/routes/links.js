'use strict';

module.exports = (app, db) => {

  // GET all links
  app.get('/links', (req, res) => {
    db.links.findAll()
      .then(links => {
        res.json(links);
      });
  });

  // GET one link by id
  app.get('/link/:id', (req, res) => {
    const id = req.params.id;
    db.links.find({
      where: { uuid: id}
    })
      .then(link => {
        res.json(link);
      });
  });

  // POST single link
  app.post('/link', (req, res) => {
    const name = req.body.name;
    const role = req.body.role;
    db.links.create({
      name: name,
      role: role
    })
      .then(newlink => {
        res.json(newlink);
      })
  });

  // PATCH single link
  app.patch('/link/:id', (req, res) => {
    const id = req.params.id;
    const updates = req.body.updates;
    db.links.find({
      where: { uuid: id }
    })
      .then(link => {
        return link.updateAttributes(updates)
      })
      .then(updatedlink => {
        res.json(updatedlink);
      });
  });

  // DELETE single link
  app.delete('/link/:id', (req, res) => {
    const id = req.params.id;
    db.links.destroy({
      where: { uuid: id }
    })
      .then(deletedlink => {
        res.json(deletedlink);
      });
  });
};