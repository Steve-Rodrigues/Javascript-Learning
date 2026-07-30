//can catch runtime errors using try-catch-finally blocks, and in the catch arg can pass in a arg to get the error object
//that error object has message and name properties to can log those out 
//also to throw an exception on anything use the throw keyword with the exceptione you want to raise

//easy examples
try{
    let x =2;
    let y=2;
    let sum = xiy;
}
catch(error){
    //throw Error('hi')
    console.error(error.name, error.message);
}
finally{
    console.log('try again');
}

//creating a binary search program to throw errors each time you enter a wrong number
function search(guess){
    num = Math.floor(Math.random() * 101);//number between 0 and 100
    if(guess===num){
        console.log('Correct');
        return
    }
    else if(guess < num){
        throw 'Too low'
    }
    else{
        throw 'Too high'
    }
}
