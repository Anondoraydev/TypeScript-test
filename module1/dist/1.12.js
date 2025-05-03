"use strict";
{
    //
    //nullable types
    var searchName = function (value) {
        if (value) {
            console.log('Searching');
        }
        else {
            console.log('Not Searching');
        }
    };
    searchName(null);
    //unknown type
    var getSpeedMeterPerSecond = function (value) {
        if (typeof value === 'number') {
            var convertedSpeed = (value * 1000) / 3600; // convert km/h to m/s
            console.log("Speed in meter per second: ".concat(convertedSpeed, " ms^-1"));
        }
        else if (typeof value === 'string') {
            var _a = value.split(' '), reault = _a[0], unit = _a[1];
            var convertedSpeed = (parseFloat(reault) * 1000) / 3600; // convert km/h to m/s
            console.log("Speed in meter per second: ".concat(convertedSpeed, " ms^-1"));
        }
        else {
            console.log('Invalid speed value');
        }
    };
    getSpeedMeterPerSecond(null); // 100 km/h
    //never type
    var throwError = function (message) {
        throw new Error(message);
    };
    throwError('This is an error message');
    //
}
