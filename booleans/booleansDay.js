//Some falsy values: 0, 0n, null, undefined, NaN, boolean false, empty strings
//ternary operators are simple if else statemtns in one line:
//form: comparison ? truth value : false value
let isRain = true;
isRain ? console.log('You need a coat') : console.log('good day');
//window is the global object in browser js and has some methods you can call directly on the browser
//alert is a pop up with no formatting, only use for testing it gets in the way
//the confirm window method is a pop up with a message and a yes/no choice after a user performs an action

//using the date object for some activiites
const now = new Date(); //creating an instance of the object
console.log(now);//Mon Jul 27 2026 18:14:30 GMT-0400 (Eastern Daylight Time)
const year = now.getFullYear();//2026
const month = now.getMonth();//0-11
const day = now.getDate();//1-31
const weekday = now.getDay();//0-6
const hours = now.getHours();//0.23
const mins = now.getMinutes();//0-59
const secs = now.getSeconds();//0-59
//this is the time funciton to time how long a function took or some operation-- it give the time since the epoch
/*
const start = now.getTime();
console.log('Waiting.....')
setTimeout(() => {
    const end = new Date().getTime();
    console.log(`That took ${(end-start)/1000} seconds`);
},10000);*/
console.log(`Todays date: ${day}/${month}/${year}`);
let ip = prompt('what day is it?');