//if we dont care about the index of the element as we loop in the array we can use the for of for loop
//this just grabs each element in shorthand way. same as for num in nums in py
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
//for(const country of countries){console.log(country)};
for(let i=0; i<7; i++){
    console.log('*'.repeat(i+1));
};
let arr =[];
for(let i=0; i<100; i++){
    arr.push(Math.floor(Math.random() * 100));
}
let sum=0;
for(const num of arr){
    sum+=num
}
const available =  'fe3jo1gl124g';
//going to create a random id from these characters
const randID = () => {
    id=0;
    for(let i=0; i<6; i++){
        id+= available[Math.floor(Math.random()*available.length)];
    }
    return id;
}
const copy = countries.slice();
const land = [];
for(let country of copy){
    if(country.includes('land')){
        land.push(country);
    }
}
const reversedArr = arr => {
    let reverse = arr.reverse();
    let result=[];
    for(c of reverse){
        let first = c[0].toLowerCase();
        result.push(c.replace(c[0],first));
    }
    return result;
}
console.log(reversedArr(countries));