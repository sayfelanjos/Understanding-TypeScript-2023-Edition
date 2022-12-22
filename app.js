"use strict";
exports.__esModule = true;
var es6_promise_1 = require("es6-promise");
var names = [];
var promise = new es6_promise_1.Promise(function (resolve, reject) {
    return setTimeout(function () {
        resolve("This is done!!!");
    }, 2000);
});
promise.then(function (data) {
    data.split(" ");
});
