//forEach is an arr method and it loops over teh array for you after you pass in the callback function to perform on each element
arr = [1,2,3,4];
arr.forEach(ele => console.log(`We are looking at number: ${ele}`));//this was just a simple print each number
//forEach cant actually return a new list so only use it for one-off tasks like this, use map for the other stuff
//setInterval takes a callback and a time in ms as parameters and will execute that fuinction every x number of ms u enetered
function callback(){
    console.log('hi');
}
//const id = setInterval(callback, 1000);//we set the id as the variable to the interval function because it returns an id so we can stop it
//seTimeout takes a callback and a time too but it executes the function once after that much time has passed
//here we have interval for 1 second print hi and then the timeout will stop it by clearing the interval and pringint stop after 4 seconds
/*
setTimeout(function(){
    clearInterval(id)
    console.log('stop');
},4000);*/
//forEach can also take in index and arr as args
arr.forEach((ele,ind,arr) => console.log(ele,ind,arr));//prints the element of current iterations with index and the array
//map modifies the current array its called on into something else which it returns
const squares = arr.map(num => num**2);
//filter returns a new array with only the elements that you want to stay
//it takes in a callback and the elements evaling to true will stay in the new array
const evens = arr.filter(num => num%2===0);
//reduce will output a single number and using theoperation you choose will return different things
//the callback takes in accumulator,current where accumulator is up to that point
//second arg allows u to give acc a starting value so it doesnt start as the first value
const sum = arr.reduce((acc,num)=>acc+num, 0);
//every checks if all the elements in the array are similar based on teh callback function check
//it reutns t or f
const numbers = arr.every(num => typeof num == 'number');//checks if all elements are of the type number
const even = arr.some(num => num%2==0);//checks if at least 1 even exists
//find returns the first element satisfying teh condition
console.log(arr.find(num=>num==2));
//findIndex returns the index of the first element to satisfy teh condition
console.log(arr.findIndex(el => el%2==0));//index of first element to be odd
//by default sort does it by converting to strings so not always correct
//so do call back for numbers with a,b and the smaller of the result of a-b will go first
const sorted = arr.sort((a,b)=>a-b);