"use strict";
// Learming functions
//Normal function
// Arrow function
function add(num1, num2) {
    // return num1 + num2; // this is a normal function
    return num1 + num2;
}
add(2, 3);
//default value
function addDefault(num1, num2) {
    if (num2 === void 0) { num2 = 5; }
    return num1 + num2; // this is a normal function with default value
}
addDefault(2); // 2 + 5 = 7
var addArrow = function (num1, num2) { return num1 + num2; }; // this is an arrow function
//objects --> function--> methods
//number of properties in an object is not fixed
var poorUser = {
    name: 'Anondo',
    balance: 0,
    addBlance: function (balance) {
        return this.balance + balance; // this is a method of an object
    },
};
//fixed string value
var poorUser1 = {
    name: 'Anondo',
    balance: 0,
    addBlance: function (balance) {
        return "My new blance is: ".concat(this.balance + balance); // this is a method of an object
    },
};
//arrys --> array of objects
var arr = [1, 2, 3, 4, 5]; // array of numbers
var newArr = arr.map(function (elem) { return elem * elem; });
