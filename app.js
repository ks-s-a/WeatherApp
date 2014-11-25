var http = require('http');

console.log('Start my app!');

http
    .createServer(function(req, res){
        res.writeHead(200, {
            'Content-Type': 'application/json'

        });
        var data = require('./lib/getWeather')();
    })
    .listen(2345);
