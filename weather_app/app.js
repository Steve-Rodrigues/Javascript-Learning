//creating the async function to fetch the data from the api
//function takes in location from search, fetch that data, validate first the code and then the success from api object, then grab the needed fields, and finally update the ui
async function getData(location){
    const response = await fetch(`https://data.api.xweather.com/conditions/${location}?client_id=lWDb3TpXMS7ii2Rl06eLm&client_secret=8rh6BG82FUo3WuiEKYtu6JqBVw0UQ9gfRZ6hp0l7`);
    if(!response.ok){
        throw new Error('Request did not go through over the network');
    }
    const data = await response.json();//converts previous promise value to json format
    //if(!data['success']){throw new Error('Could not retrieve the data');}
    const section = data['response'][0]['periods'][0];//grabs this index so now we just have the object of values
    return section;//have all the key/val data we need now just return that data
}

//first need the dom elements in variables so we can listen for the input event
const query = document.querySelector('input.location-search');
query.addEventListener('keydown', async event => {
    if(event.key === 'Enter'){
        let location = query.value;
        let arr = location.split(' ');
        let finalLocation = arr.join('%20');//for formatting
        //use the values from the fetching to update the ui
        const fetched_data = await getData(finalLocation);
        const {tempC, tempF, feelslikeC, feelslikeF, humidity, windSpeedMPH: wind, weather} = fetched_data;
        //getting all the elemetns from the dom
        const temp = document.querySelector('div.temp-val');
        const emoji = document.querySelector('div.emoji');
        const outlook = document.querySelector('h4.day-outlook');
        const feelLike = document.querySelector('div.feels-like h4');
        const windEl = document.querySelector('div.wind h4');
        const humid = document.querySelector('div.humid h4');
        //update all the ui text
        console.log(typeof tempF);
        temp.textContent = `${Math.floor(tempF)}°`;
        outlook.textContent = weather;
        feelLike.textContent = `${Math.floor(feelslikeF)}°`;
        windEl.textContent = `${wind} mph`;
        humid.textContent = `${humidity}%`;
    }
    return;
});


