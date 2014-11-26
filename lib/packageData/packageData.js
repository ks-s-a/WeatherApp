function packageData(callback) {
    var Step = require('step');
    var getWeather = require(process.cwd() + '\\lib\\getWeather\\getWeather');

    Step(
        function assemblyData() {
            getWeather(this.parallel())
        },
        callback
    );

}

module.exports = packageData;