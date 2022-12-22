import {Promise} from 'es6-promise'

const names: Array<string> = [];

const promise: Promise<string> = new Promise((resolve, reject) =>
    setTimeout(() => {
        resolve("This is done!!!");
    }, 2000));

promise.then(data => {
    data.split(" ");
});