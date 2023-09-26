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
        function formatDate(inputDate) {
            // Strip out the time portion and create a new Date object from the input date
            const dateOnly = inputDate.split(" ")[0];
            const dateObj = new Date(dateOnly);
        
            // Extract the day, month, and year from the Date object
            const day = String(dateObj.getDate()).padStart(2, '0');
            const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Months are 0-based in JS
            const year = dateObj.getFullYear();
        
            // Return the formatted date
            return `${month}-${day}-${year}`;
        }
        const currentDateFormated = (formatDate(currentDate))
        console.log(currentDateFormated)
        
        
        const currentTempItem = document.createElement("p")
        const currentDateItem = document.createElement("p")
        const currentHumidityItem = document.createElement("p")
        const currentWindItem = document.createElement("p")
        currentDateItem.textContent = "Date: " + currentDateFormated;
        currentTempItem.textContent = "Temp: " + currentTemp + " F°";
        currentHumidityItem.textContent = "Humidity: " + currentHumidity + " %";
        currentWindItem.textContent = "Wind: " + currentWind + " MPH"
        currentForecast.append(currentDateItem, currentTempItem, currentHumidityItem, currentWindItem)

        
        const dayOneTemp = data.list[7].main.temp;
        const dayOneHumidity = data.list[7].main.humidity;
        const dayOneWind = data.list[7].wind.speed;
        const dayOneDate = data.list[7].dt_txt;
        const dayOneDateFormated = (formatDate(dayOneDate))
        const dayOneTempItem = document.createElement("p");
        const dayOneDateItem = document.createElement("p");
        const dayOneHumidityItem = document.createElement("p");
        const dayOneWindItem = document.createElement("p");
        dayOneDateItem.textContent = "Date: " + dayOneDateFormated;
        dayOneTempItem.textContent = "Temp: " + dayOneTemp + " F°";
        dayOneHumidityItem.textContent = "Humidity: " + dayOneHumidity + " %";
        dayOneWindItem.textContent = dayOneWind + " MPH";
        dayOneForecast.append(dayOneDateItem, dayOneTempItem, dayOneHumidityItem, dayOneWindItem);

        
        const dayTwoTemp = data.list[15].main.temp;
        const dayTwoHumidity = data.list[15].main.humidity;
        const dayTwoWind = data.list[15].wind.speed;
        const dayTwoDate = data.list[15].dt_txt;
        const dayTwoDateFormated = (formatDate(dayTwoDate))
        const dayTwoTempItem = document.createElement("p");
        const dayTwoDateItem = document.createElement("p");
        const dayTwoHumidityItem = document.createElement("p");
        const dayTwoWindItem = document.createElement("p");
        dayTwoDateItem.textContent = "Date: " + dayTwoDateFormated;
        dayTwoTempItem.textContent = "Temp: " + dayTwoTemp + " F°";
        dayTwoHumidityItem.textContent = "Humidity: " + dayTwoHumidity + " %";
        dayTwoWindItem.textContent = dayTwoWind + " MPH";
        dayTwoForecast.append(dayTwoDateItem, dayTwoTempItem, dayTwoHumidityItem, dayTwoWindItem);


        const dayThreeTemp = data.list[23].main.temp;
        const dayThreeHumidity = data.list[23].main.humidity;
        const dayThreeWind = data.list[23].wind.speed;
        const dayThreeDate = data.list[23].dt_txt;
        const dayThreeDateFormated = (formatDate(dayThreeDate))
        const dayThreeTempItem = document.createElement("p");
        const dayThreeDateItem = document.createElement("p");
        const dayThreeHumidityItem = document.createElement("p");
        const dayThreeWindItem = document.createElement("p");
        dayThreeDateItem.textContent = "Date: " + dayThreeDateFormated;
        dayThreeTempItem.textContent = "Temp: " + dayThreeTemp + " F°";
        dayThreeHumidityItem.textContent = "Humidity: " + dayThreeHumidity + " %";
        dayThreeWindItem.textContent = dayThreeWind + " MPH";
        dayThreeForecast.append(dayThreeDateItem, dayThreeTempItem, dayThreeHumidityItem, dayThreeWindItem);
        
        const dayFourTemp = data.list[31].main.temp;
        const dayFourHumidity = data.list[31].main.humidity;
        const dayFourWind = data.list[31].wind.speed;
        const dayFourDate = data.list[31].dt_txt;
        const dayFourDateFormated = (formatDate(dayFourDate))
        const dayFourTempItem = document.createElement("p");
        const dayFourDateItem = document.createElement("p");
        const dayFourHumidityItem = document.createElement("p");
        const dayFourWindItem = document.createElement("p");
        dayFourDateItem.textContent = "Date: " + dayFourDateFormated;
        dayFourTempItem.textContent = "Temp: " + dayFourTemp + " F°";
        dayFourHumidityItem.textContent = "Humidity: " + dayFourHumidity + " %";
        dayFourWindItem.textContent = dayFourWind + " MPH";
        dayFourForecast.append(dayFourDateItem, dayFourTempItem, dayFourHumidityItem, dayFourWindItem);
        
        const dayFiveTemp = data.list[39].main.temp;
        const dayFiveHumidity = data.list[39].main.humidity;
        const dayFiveWind = data.list[39].wind.speed;
        const dayFiveDate = data.list[39].dt_txt;
        const dayFiveDateFormated = (formatDate(dayFiveDate))
        const dayFiveTempItem = document.createElement("p");
        const dayFiveDateItem = document.createElement("p");
        const dayFiveHumidityItem = document.createElement("p");
        const dayFiveWindItem = document.createElement("p");
        dayFiveDateItem.textContent = "Date: " + dayFiveDateFormated;
        dayFiveTempItem.textContent = "Temp: " + dayFiveTemp + " F°";
        dayFiveHumidityItem.textContent = "Humidity: " + dayFiveHumidity + " %";
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
