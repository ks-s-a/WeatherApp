function init(outerStream) {

    var http = require('http');
    var fs = require('fs');
    var config = JSON.parse(fs.readFileSync('./lib/weatherConfig.json', 'utf8'));

    var data = [];
    var count = 0;
//
    for (var source in config) {
        count++;
        http
            .get(config[source], function(res) {
                var buf = new Buffer();

                res.on('data', function(d){buf.push(d);});
                res.on('end', function(){
                    data.push( buf.toString() )
                    if (data.length === count) outerStream.write(data);
                });


            })
            .on('error', function (e) {
                console.log('problem with request: ' + e.message);
            });
    }
}

module.exports = init;