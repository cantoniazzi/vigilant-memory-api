'use strict'

const routeLinks = require('./routes/links'); 


// Add access to the app and db objects to each route
module.exports = function router(app, db) {
    routeLinks(app, db);
};