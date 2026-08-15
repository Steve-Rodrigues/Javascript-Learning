//creating the async function to fetch the data from the api
//function takes in location from search, fetch that data, validate first the code and then the success from api object, then grab the needed fields, and finally update the ui
const errorPage = document.querySelector('div.error-page');
async function getData(location){
    const response = await fetch(`https://data.api.xweather.com/conditions/${location}?client_id=lWDb3TpXMS7ii2Rl06eLm&client_secret=8rh6BG82FUo3WuiEKYtu6JqBVw0UQ9gfRZ6hp0l7`);
    if(!response.ok){
        errorPage.classList.toggle('active');
        loadCard.classList.toggle('active');
        throw new Error('Request did not go through over the network');
    }
    const data = await response.json();//converts previous promise value to json format
    if(!data['success']){
        errorPage.classList.toggle('active');
        loadCard.classList.toggle('active');
        throw new Error('Could not retrieve the data');
    }
    const section = data['response'][0]['periods'][0];//grabs this index so now we just have the object of values
    return section;//have all the key/val data we need now just return that data
}
const errorSearch = document.querySelector('.error-page button');
errorSearch.addEventListener('click', e => {
    errorPage.classList.toggle('active');
    loadCard.classList.toggle('active');
});

//first need the dom elements in variables so we can listen for the input event
const query = document.querySelector('input.location-search');
query.addEventListener('keydown', async event => {
    if(event.key === 'Enter'){
        let location = query.value;
        let arr = location.split(' ');
        let finalLocation = arr.join('%20');//for formatting
        //use the values from the fetching to update the ui
        const fetched_data = await getData(finalLocation);
        const {tempC, tempF, feelslikeC, feelslikeF, humidity, windSpeedMPH: wind, weather, dateTimeISO: dateData} = fetched_data;
        //getting all the elemetns from the dom
        //making a date object to take in the date data from the api and then formatting it
        const date = new Date(dateData);//should come in the form of the date string so y/m/dThour/min/sec. first format the day
        const weekFormat = date.toLocaleDateString(undefined, {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
        });
        const timeFormat = date.toLocaleTimeString(undefined, {
            hour: 'numeric',
            minute: 'numeric'
        });
        const temp = document.querySelector('div.temp-val');
        const emoji = document.querySelector('div.emoji');
        const outlook = document.querySelector('h4.day-outlook');
        const feelLike = document.querySelector('div.feels-like h4');
        const windEl = document.querySelector('div.wind h4');
        const humid = document.querySelector('div.humid h4');
        const dateInfo = document.querySelector('div.date-time');
        //update all the ui text
        console.log(typeof tempF);
        temp.textContent = `${Math.floor(tempF)}°`;
        outlook.textContent = weather;
        feelLike.textContent = `${Math.floor(feelslikeF)}°`;
        windEl.textContent = `${wind} mph`;
        humid.textContent = `${humidity}%`;
        dateInfo.textContent = `${weekFormat} • ${timeFormat}`;
        if(weather.toLowerCase().includes('sunny')){emoji.textContent = '☀️';}
        else if(weather.toLowerCase().includes('cloudy')){emoji.textContent = '💭';}
        else if(weather.toLowerCase().includes('thunder')){emoji.textContent = '⛈️';}
        else{emoji.textContent = '🌧️';}
    }
    return;
});
const loadCard = document.querySelector('div.load-phase');
window.addEventListener('load', event=>{
    loadCard.classList.toggle('active');
});
const initInput = document.querySelector('div.search-bar');
const button = document.querySelector('.search-bar button');
const main = document.querySelector('div.weather-card');
const input = document.querySelector('div.search-bar input');
initInput.addEventListener('click', async event => {
    if (event.target == button){
        let location = input.value;
        let arr = location.split(' ');
        let finalLocation = arr.join('%20');//for formatting
        //use the values from the fetching to update the ui
        const fetched_data = await getData(finalLocation);
        const {tempC, tempF, feelslikeC, feelslikeF, humidity, windSpeedMPH: wind, weather, dateTimeISO: dateData} = fetched_data;
        //getting all the elemetns from the dom
        //making a date object to take in the date data from the api and then formatting it
        const date = new Date(dateData);//should come in the form of the date string so y/m/dThour/min/sec. first format the day
        const weekFormat = date.toLocaleDateString(undefined, {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
        });
        const timeFormat = date.toLocaleTimeString(undefined, {
            hour: 'numeric',
            minute: 'numeric'
        });
        const temp = document.querySelector('div.temp-val');
        const emoji = document.querySelector('div.emoji');
        const outlook = document.querySelector('h4.day-outlook');
        const feelLike = document.querySelector('div.feels-like h4');
        const windEl = document.querySelector('div.wind h4');
        const humid = document.querySelector('div.humid h4');
        const dateInfo = document.querySelector('div.date-time');
        //update all the ui text
        console.log(typeof tempF);
        temp.textContent = `${Math.floor(tempF)}°`;
        outlook.textContent = weather;
        feelLike.textContent = `${Math.floor(feelslikeF)}°`;
        windEl.textContent = `${wind} mph`;
        humid.textContent = `${humidity}%`;
        dateInfo.textContent = `${weekFormat} • ${timeFormat}`;
        if(weather.toLowerCase().includes('sunny')){emoji.textContent = '☀️';}
        else if(weather.toLowerCase().includes('cloudy')){emoji.textContent = '💭';}
        else if(weather.toLowerCase().includes('thunder')){emoji.textContent = '⛈️';}
        else{emoji.textContent = '🌧️';}
        main.classList.toggle('active');
        loadCard.classList.toggle('active');
    }
    else{return;}
});


