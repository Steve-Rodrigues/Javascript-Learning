//going to be working on requesting data from api using fetch and posting data to it too
//these are async operations so they are wrapped in async/await functions so it does not disrupt the rest of the flow
const resp = await fetch('https://jsonplaceholder.typicode.com/users');
const json = await resp.json();//this is GETTING data from the api

const person = {
    userId: 1,
    id: 1,
    title: 'Spiderman',
    body: 'New brand new day movie'
};//this object is going to be posted to the server using A POST request to the api
const feedback =  await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers:{
        'Content-type': 'application/json'
    },
    body: JSON.stringify(person)
});
const res = await feedback.json();
console.log(res);//returns the data that we send over
const deleted = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
});

const response = await deleted.json(); //gives back an empty body because we deleted

const putting = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({userId: 19, title: 'Stevie', body: 'howdy'})
});
const putResp = await putting.json();
console.log(putResp);


