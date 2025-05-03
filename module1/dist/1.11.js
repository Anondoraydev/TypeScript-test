"use strict";
var _a, _b;
{
    //ternary operator || optional chaining || nullish coalescing operator
    var age = 17;
    if (age >= 18) {
        console.log('You are eligible to vote');
    }
    else {
        console.log('You are not eligible to vote');
    }
    var isEligibleToVote = age >= 17 ? 'You are eligible to vote' : 'You are not eligible to vote';
    console.log(isEligibleToVote);
    //nullish coalescing operator`
    //null / undefined
    var isAuthenticated = null;
    var result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : 'Guest User';
    var result2 = isAuthenticated ? isAuthenticated : 'Guest User';
    console.log({ result1: result1 }, { result2: result2 });
    var user_1 = {
        name: 'Anondo',
        address: {
            city: 'Dhaka',
            road: 'Mirpur-1',
            presentAddress: 'Mirpur-1',
        },
    };
    var presentAddress = (_b = (_a = user_1 === null || user_1 === void 0 ? void 0 : user_1.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : 'Not Available';
    console.log({ presentAddress: presentAddress });
    //
}
