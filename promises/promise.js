//Promises are asynchronous blocks of code which are blocks that run independent of the rest of the program(like an API call). And it allows the rest of teh program to run while this happens
//They are in either pending, resolved, or rejected state and we see the states by using the resolved and rejected functions we make which are passed into the Promise object as callbacks
//when successful we do some sort of functionality as the input into the resolved and opposite for rejected
//in the resolved and rejected it takes the input parameter and does something with it
//then and catch are the functions to control what happens next--they take in callback functions to work with the resolved and rejected

//making promises
//1.Returns a random num if output is above 0.5, uses promise to display the results because it will be asynchronous work
function ranNum(){
    return new Promise((resolved, rejected) => {
        let randomNum = Math.floor(Math.random() * 10);
        let chance = Math.random();
        if(chance < 0.5){
            
            rejected('You are not lucky today');
        }
        else{
            resolved(randomNum);
        }
    });
}
function square(num){
    return new Promise((resolved, rejected) => {
        let result = num **2;
        if(result < 81){
            resolved(`Success!! The result is ${result}`);
        }
        else{
            rejected('Not able to do it...');
        }
    });
}
//ranNum().then(msg => {console.log(msg);}).catch(msg => {console.error(msg);});
//console.log('hi');//notice that this logged before the async work because the program does not stop, we just log results once it resolved or rejected

ranNum().then(num => {return square(num);}).then(msg => {console.log(msg);}).catch(msg => {console.error(msg)});
