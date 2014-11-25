function init(callback) {
    var fs = require('fs');
    var Step = require('step');
    var config = JSON.parse(fs.readFileSync('./lib/weatherConfig.json', 'utf8'));
    var request = require('request');

    for (var source in config) {
        Step(
            function(){
                request({
                    url: 'http://' + config[source].hostname + config[source].path,
                    method: 'GET', port: 80
                }, this);
            },
            function(err, res, data){
                if (err) throw err;
                callback(null, data)
            }
        );
    }
}

module.exports = init;