var http = require('http');
var getWeather = require('./lib/getWeather');
console.log('Start my app!');

http
    .createServer(function(req, res){
        getWeather(function(err, data){
            if (err) throw err;
            res.write(data);

        });
    })
    .listen(2345);
