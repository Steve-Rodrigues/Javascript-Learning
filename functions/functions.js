//functions:
//can take an arbituary number of arguments using different things in arrow and function declaration style

//arrow syntax: takes an ellipse the ... and then the name for teh arguments holder
const sumNums = (...args) => {
    let sum=0;
    for(const num of args){
        sum+=num;
    }
    return sum;
}
//declared holder: just use the arguments object
//however can use the ...args way for both 
function summed(){
    sum=0;
    for(const num in arguments){
        sum+=Number(num);
    }
    console.log(sum);
}
//self invoking runs immediatly by calling with parenthesis right after
(function(){
    console.log(2);
})();
//default paramaters work like normal
function fullname(first='steve',last='rodrigues'){
    console.log(`${first} ${last}`);
};

function showDateTime(){
    let now = new Date;
    let month = now.getMonth();
    let day = now.getDate();
    let year = now.getFullYear();
    let hour= now.getHours();
    let mins = now.getMinutes();
    console.log(`${month}/${day}/${year} ${hour}:${mins}`);
}
const swap = (a,b) =>{
    let temp = a;
    let newA = b;
    let newB = temp;
}
function factorial(n){
    if(n==1){return 1;}
    else{
        return n*factorial(n-1);
    }
}
function nrandom(n){
    const arr=[];
    for(let i=0; i<7; i++){
        let num = Math.floor(Math.random() * 10);
        while(arr.includes(num)){
        num = Math.floor(Math.random() * 10);
        }
        arr.push(num);
    }
return arr;
}
console.log(nrandom(7));