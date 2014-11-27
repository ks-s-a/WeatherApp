function packageData(cityName, callback) {
    var Step = require('step');
    var getWeather = require(process.cwd() + '\\lib\\openWeather\\openWeather');
    var winston = require('winston');

    Step(
        function assemblyData() {
            var group = this.group();

            winston.info('Start executing extraction sequence.');

            // Execute extraction sequence
            getWeather(cityName, group())
        },
        callback
    );

}

module.exports = packageData;