'use strict'

const routeLinks = require('./routes/links');
const routeCrawler = require('./routes/crawler');
const serviceCrawler = require('../services/crawlerService.js');

// Add access to the app and db objects to each route
module.exports = function router(app, db) {
    routeLinks(app, db);
    routeCrawler(app,  new serviceCrawler());
};