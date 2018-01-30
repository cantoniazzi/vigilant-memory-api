const cheerio = require('cheerio');
const request = require('request');


const crawlerService = (function() {

    let crawlerService = function() {
    };

    crawlerService.prototype.getPageInfo = function(uri) {
        return new Promise(
            function(resolve, reject) {
                request({
                    method: 'GET',
                    url: uri
                }, function(err, response, body) {
                    if (err) reject(err);
                
                    $ = cheerio.load(body);
            
                    let title = $('meta[property="og:title"]').attr('content') || $("title").text();
                    let description = $('meta[property="og:description"]').attr('content') || $('meta[name="description"]').attr('content');
                    let icon =  $('link[rel=icon]').attr('href') || $('img').first().attr('src');
            
                    resolve({ title: title, description: description, icon: icon});
                });
            }
        );
    }

    return crawlerService;

})();

module.exports = crawlerService;