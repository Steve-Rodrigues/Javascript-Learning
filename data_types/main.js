//primitve vs non-primitive data types:
//primitve types: non mutable, we can not modify them, only reassign
//this is because the exact value is stored in the variable, not a pointer to it
let name = 'steve';
let number = 7;
//this does not work, you are trying to modify it
name[0] = 't';
//console.log(name)
//reasignment is fine tho
name = 'tyler'
//console.log(name)
//this is why when comparing primitives, if the value is the same they are equal because its the exact value
//however, in non-prims like arrays they are not equal because they are different pointers in memory:
let dict1 = {'name': 'steve'};
let dict2 = {'name': 'steve'};
//console.log(dict1===dict2)
let test1 = 'steve';
let test = 'steve';
//console.log(test1===test);
//some math object methods
const pi = Math.PI
//console.log(Math.round(pi)); some rounding
//console.log(Math.floor(pi), Math.ceil(pi));
console.log(Math.min(1,2,3,5,4,4,5,-1));
console.log(Math.max([5,4,6,1,'a']));
const randNum = Math.random()//between 0 and .99
const num = Math.floor(randNum*11);//random betwwen 0 and 10
console.log(num);
console.log(Math.pow(-2,2));
console.log(Math.LN2);

//strings: text declared via double, single, or backtick quote mark
//if a string is too long we can use a backslach (\) escape to show it will go onto the next line
console.log('Hi im steve, \ni hope you are doing well.');
console.log('Hi I\'m Steve');
//template literals: to create a template string use back ticks and then inject data as expressions inside of the ${}
let a=5,b=9;
console.log(`I am turning ${a} years old and she is turning ${b} years old`);
//since string is primitive we can temporarily wrap it in a String Object so we can manipulate it 
let string = 'steve';
let firstletter = string[0];
console.log(firstletter);
let lastLetter = string.length-1;
//see how string is only a temproary object-- the method only converts to upper case when it is wrapper as an object unless stored in a reference prim variabel
console.log(string.toUpperCase());
console.log(string);
let fname = string.toLowerCase();
let country = 'finland';
console.log(country.substr(0,3));//starts at index 0 and grabs 3 elements(letters)
console.log(country.substring(0,country.length));//starts at index and goes to end index non-inclusive
console.log(country.split(''));//splits string at each index into own elements in the array
let newString = '   30 Days Of JavaScript   '
console.log(newString.trim());//gets rid of leading and trailing whitespace
console.log(newString.includes('Days'));//returns t/f if the string includes the substring
console.log(newString.replace('Days', 'Weeks').trim());
console.log(newString.trim().charAt(0));//returns the character at that index
console.log(newString.indexOf('Days'));//takes substring and returns the first index position of that substring if it exists in the string
console.log(country.concat(' usa ','jamiaca ','pr').replace(' ',','));//concats a list of strings onwards
console.log(country.startsWith('us'));//return t or f if it starts with that substriung
//endswith is the same thing
//str.repeat(n) returns the repeated version of the string n times
//to check data types use type of data mathod
console.log(typeof 3.1);
let num1 = '10';
num1 = Number(num1)
console.log(typeof num1);
console.log(typeof String(num1));