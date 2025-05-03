"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{
    //spread operator
    // rest operator
    // destructuring
    //learn spread operator
    var bros1 = ['a', 'b', 'c'];
    var bros2 = ['d', 'e', 'f'];
    //bros1=(bros2); // Type 'string[]' is not assignable to type 'never[]'.ts(2322)
    bros1.push.apply(bros1, bros2); // ['a', 'b', 'c', 'd', 'e', 'f']
    var mentors1 = {
        prisma: 'Firoz',
        next: 'Tanvir',
        courde: 'Sanjana',
    };
    var mentors2 = {
        typeScript: 'alif',
        react: 'Suman',
        next: 'Gulshan',
    };
    var allMentors = __assign(__assign({}, mentors1), mentors2);
    // Define a function that takes three friends' names as parameters
    var greetFriends = function (friend1, friend2, friend3) {
        // Print a greeting message with all three friends' names
        console.log("Hello ".concat(friend1, ", ").concat(friend2, ", ").concat(friend3));
    };
    // Call the function with three friend names
    greetFriends('Anondo', 'Sanjana', 'Monika'); // Output: Hello Anondo, Sanjana, Monika
    //learn rest operator
    var greetFriends1 = function () {
        // console.log(`Hello ${friend1}, ${friend2}, ${friend3}`);
        var friends = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            friends[_i] = arguments[_i];
        }
        friends.forEach(function (friend) {
            console.log("Hello ".concat(friend));
        });
    };
    greetFriends1('Anondo', 'Sanjana', 'Monika'); // Output: Hello Anondo, Sanjana, Monika
}
