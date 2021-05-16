// assign global variables /////////////////////////////////////////////////////
let apiKey = '345dea590c25774e262329034275a689';
// HMTL IDS
// city
// temp
// wind
// humidity
// uv index - set class
// five day container
// cities history
let cities = [];
// functions //////////////////////////////////////////////////////////////////
// init
function init() {
    // check local storage for the key (cities) if present
    let citiesStorage = localStorage.getItem('cities');
    if (citiesStorage) {
        // loop through local storage and create buttons with the button label as the city
        cities = JSON.parse(citiesStorage);
        console.log(cities);
        cities.forEach(city => {
            // make and append a button to the left panel
        })
    }
    console.log('no data');
}
// getWeather
function getWeather() {
    fetch('api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${345dea590c25774e262329034275a689}')
        .then(response => response.json())
        .then(data => {
            let getWeather = data['weather'][0]['main'];
        })
}
// parameter: value of search box (city name)
// call the weather api with the city name to get the coordinates (lat, lon)
// find the lat and lon within the data and set them as variables
// in the then of the call above, use the lat and lon to get current weather and future
// in the then of the call above, i find the data i need for the top card on the right (city, date, temp, wind, humidity, uv index)
// RENDER FUNCTION if uv index greater than some value, set the class
// RENDER FUNCTION for the 5 day forecast i want to loop through array of daily data and dynamically create a card and append it to the website
// each card will have date, icon for condition, temp, wind, humidity
// save to local storage the city the user just searched,
// check local storage for that city, don't add if already there
// events ////////////////////////////////////////////////////////////////////
// init - check local storage
init();
// click search button - call the api and get our cream filling
// click on past city button (class) - just call the getWeather function with the label of the button