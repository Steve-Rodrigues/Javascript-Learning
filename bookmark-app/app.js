//get the currently stored data from the backend database using this function
const requestAllData = async () =>{
    const response = await fetch('http://localhost:5000/bookmarks');//check if the status code is in teh 200's
    if(!response.ok){
        throw new Error('The request did not go over the network');
    }
    const data = await response.json();//return this json data
    return data 
}


//need to get the data from the user that they want to store in their resources db
const userTitle = document.querySelector('input.title');
const userUrl = document.querySelector('input.url');
const userTopic = document.querySelector('input.topic');
const submit = document.querySelector('button.btn-primary');

submit.addEventListener('click', async e => {
    e.preventDefault();
    const newTitle = userTitle.value;
    const newUrl = userUrl.value;
    let newTopic = null;
    if(userTopic.value){
         newTopic = userTopic.value;
    }
    const resourceObj = {
        title: newTitle,
        url: newUrl,
        topic: newTopic
    }//make sure to turn this into a json string before sending to the db in the http request
    const postedData = await postData(resourceObj);
    console.log(postedData);
});

//now to write new data to the api database use this function
//the object of data we are sending is going to have the categories that were submitted by the user
//it should include the resource title, url, topic(maybe). it will take in the object as an arg to pass into the fetch call
async function postData(obj,url='http://localhost:5000/bookmarks'){
    let request;
    try{
         request = await fetch(url, {
            method: 'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(obj)
        });
    }
    catch(e){
        throw new Error('Could not send the data over the network...');
    }
    const response = await request.json();
    return response;
}
//now for deleting data we are going to need to get all entries from the db and then enter the id in the fetch call to delete
//deletion is easy just pass in the method and url into fetch and catch errors
async function deleteData(id, url='http://localhost:5000/bookmarks'){
    let request;
    try{
        request = await fetch(`${url}/${id}`,{
        method: 'DELETE'
    });}
    catch(e){
        throw new Error('Could not make the request over the network');
    }
    const response = await request.json();
    return response;
}

//not for PUT requests which is just updating certain inputs in the db
async function update(id,updatedField,url='http://localhost:5000/bookmarks'){
    let request;
    try{
        request = await fetch(`${url}/${id}`,{
            method: 'PUT',
            headers:{
                'Content-type': 'application/json',
            },
            body:JSON.stringify(updatedField)
        });
    }
    catch(e){
        throw new Error('COuldnt go over the network');
    }
    const resp = await request.json();
    return resp;
}
//expose functions on window so they can be called manually from the DevTools console for testing
window.requestAllData = requestAllData;
window.postData = postData;
window.deleteData = deleteData;
window.update = update;

