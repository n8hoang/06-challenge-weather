const currentForecast = document.getElementById("currentWeather")
const currentTempText = document.getElementById("currentTemp")
const currentHumidityText = document.getElementById("currentHumidity")
const currentWindText = document.getElementById("currentWind")
const dayOneForecast = document.getElementById("dayOneWeather")
const dayTwoForecast = document.getElementById("dayTwoWeather")
const dayThreeForecast = document.getElementById("dayThreeWeather")
const dayFourForecast = document.getElementById("dayFourWeather")
const dayFiveForecast = document.getElementById("dayFiveWeather")



document.getElementById('searchBtn').addEventListener('click', function() {
    let cityName = document.getElementById('cityInput').value.trim();
    cityNameCleaned = cityName.replace(/ /g, '%20');
    console.log(cityName);
    // Get latitude and longitude for the city using OpenWeatherMap API
    const url = 'http://api.openweathermap.org/geo/1.0/direct?q='+ cityName +'&limit=1&appid=f17b80a27f709b301d621c8fa4baf88e'
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const lat = data[0].lat;
        const lon = data[0].lon;

        
        // Now get the 5 Day Forecast using latitude and longitude
        return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=f17b80a27f709b301d621c8fa4baf88e&units=imperial`);
    })
    .then(response => response.json())
    .then(data => {
        // Display the current weather and forecast using the data
        // Openweather uses 8 data points for each day so we use every 8th data point
        console.log(data)
        const currentTemp = data.list[0].main.temp;
        const currentHumidity = data.list[0].main.humidity;
        const currentWind = data.list[0].wind.speed;
        const currentDate = data.list[0].dt_txt;
        const currentTempItem = document.createElement("p")
        const currentDateItem = document.createElement("p")
        const currentHumidityItem = document.createElement("p")
        const currentWindItem = document.createElement("p")
        currentDateItem.textContent = currentDate
        currentTempItem.textContent = currentTemp + " F°";
        currentHumidityItem.textContent = currentHumidity + " %";
        currentWindItem.textContent = currentWind + " MPH"
        currentForecast.append(currentDate, currentTempItem, currentHumidityItem, currentWindItem)

        // Day One Forecast
        const dayOneTemp = data.list[8].main.temp;
        const dayOneHumidity = data.list[8].main.humidity;
        const dayOneWind = data.list[8].wind.speed;
        const dayOneDate = data.list[8].dt_txt;
        const dayOneTempItem = document.createElement("p");
        const dayOneDateItem = document.createElement("p");
        const dayOneHumidityItem = document.createElement("p");
        const dayOneWindItem = document.createElement("p");
        dayOneDateItem.textContent = dayOneDate;
        dayOneTempItem.textContent = dayOneTemp + " F°";
        dayOneHumidityItem.textContent = dayOneHumidity + " %";
        dayOneWindItem.textContent = dayOneWind + " MPH";
        dayOneForecast.append(dayOneDateItem, dayOneTempItem, dayOneHumidityItem, dayOneWindItem);

        
        // Day Two Forecast
        const dayTwoTempItem = document.createElement("p");
        const dayTwoDateItem = document.createElement("p");
        const dayTwoHumidityItem = document.createElement("p");
        const dayTwoWindItem = document.createElement("p");
        dayTwoDateItem.textContent = dayTwoDate;
        dayTwoTempItem.textContent = dayTwoTemp + " F°";
        dayTwoHumidityItem.textContent = dayTwoHumidity + " %";
        dayTwoWindItem.textContent = dayTwoWind + " MPH";
        dayTwoForecast.append(dayTwoDateItem, dayTwoTempItem, dayTwoHumidityItem, dayTwoWindItem);
        
        // Day Three Forecast
        const dayThreeTempItem = document.createElement("p");
        const dayThreeDateItem = document.createElement("p");
        const dayThreeHumidityItem = document.createElement("p");
        const dayThreeWindItem = document.createElement("p");
        dayThreeDateItem.textContent = dayThreeDate;
        dayThreeTempItem.textContent = dayThreeTemp + " F°";
        dayThreeHumidityItem.textContent = dayThreeHumidity + " %";
        dayThreeWindItem.textContent = dayThreeWind + " MPH";
        dayThreeForecast.append(dayThreeDateItem, dayThreeTempItem, dayThreeHumidityItem, dayThreeWindItem);
        
        // Day Four Forecast
        const dayFourTempItem = document.createElement("p");
        const dayFourDateItem = document.createElement("p");
        const dayFourHumidityItem = document.createElement("p");
        const dayFourWindItem = document.createElement("p");
        dayFourDateItem.textContent = dayFourDate;
        dayFourTempItem.textContent = dayFourTemp + " F°";
        dayFourHumidityItem.textContent = dayFourHumidity + " %";
        dayFourWindItem.textContent = dayFourWind + " MPH";
        dayFourForecast.append(dayFourDateItem, dayFourTempItem, dayFourHumidityItem, dayFourWindItem);
        
        // Day Five Forecast
        const dayFiveTempItem = document.createElement("p");
        const dayFiveDateItem = document.createElement("p");
        const dayFiveHumidityItem = document.createElement("p");
        const dayFiveWindItem = document.createElement("p");
        dayFiveDateItem.textContent = dayFiveDate;
        dayFiveTempItem.textContent = dayFiveTemp + " F°";
        dayFiveHumidityItem.textContent = dayFiveHumidity + " %";
        dayFiveWindItem.textContent = dayFiveWind + " MPH";
        dayFiveForecast.append(dayFiveDateItem, dayFiveTempItem, dayFiveHumidityItem, dayFiveWindItem);

        
        // Save the city to localStorage
        let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        searchHistory.push(cityName);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    });
});

// Load previous searches from localStorage
let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
document.getElementById('searchHistory').innerHTML = searchHistory.map(city => `<li>${city}</li>`).join('');
