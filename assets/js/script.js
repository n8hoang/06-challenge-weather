const currentForecast = document.getElementById("currentWeather")
const currentTempText = document.getElementById("currentTemp")
const currentHumidityText = document.getElementById("currentHumidity")
const currentWindText = document.getElementById("currentWind")
const dayOneForecast = document.getElementById("dayOneWeather")
const dayTwoForecast = document.getElementById("dayTwoWeather")
const dayThreeForecast = document.getElementById("dayThreeWeather")
const dayFourForecast = document.getElementById("dayFourWeather")
const dayFiveForecast = document.getElementById("dayFiveWeather")
const historyContainer = document.getElementById('historyContainer');
const cardContent = document.querySelector(".card-content")
const currentForecastCard = document.querySelector(".card-header-title")
const cityText = document.querySelector(".city")

const currentDateText = document.getElementById("currentDate");

const dayOneDateText = document.getElementById("dayOneDate");
const dayOneTempText = document.getElementById("dayOneTemp");
const dayOneHumidityText = document.getElementById("dayOneHumidity");
const dayOneWindText = document.getElementById("dayOneWind");

const dayTwoDateText = document.getElementById("dayTwoDate");
const dayTwoTempText = document.getElementById("dayTwoTemp");
const dayTwoHumidityText = document.getElementById("dayTwoHumidity");
const dayTwoWindText = document.getElementById("dayTwoWind");

const dayThreeDateText = document.getElementById("dayThreeDate");
const dayThreeTempText = document.getElementById("dayThreeTemp");
const dayThreeHumidityText = document.getElementById("dayThreeHumidity");
const dayThreeWindText = document.getElementById("dayThreeWind");

const dayFourDateText = document.getElementById("dayFourDate");
const dayFourTempText = document.getElementById("dayFourTemp");
const dayFourHumidityText = document.getElementById("dayFourHumidity");
const dayFourWindText = document.getElementById("dayFourWind");

const dayFiveDateText = document.getElementById("dayFiveDate");
const dayFiveTempText = document.getElementById("dayFiveTemp");
const dayFiveHumidityText = document.getElementById("dayFiveHumidity");
const dayFiveWindText = document.getElementById("dayFiveWind");

const getWeather = function() {
    let cityName = document.getElementById('cityInput').value.trim();
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
        
        const currentCityItem = document.createElement("h1")
        const currentTempItem = document.createElement("p")
        const currentDateItem = document.createElement("p")
        const currentHumidityItem = document.createElement("p")
        const currentWindItem = document.createElement("p")
        currentCityItem.textContent = cityName;
        currentDateItem.textContent = "Date: " + currentDateFormated;
        currentTempItem.textContent = "Temp: " + currentTemp + " F°";
        currentHumidityItem.textContent = "Humidity: " + currentHumidity + " %";
        currentWindItem.textContent = "Wind: " + currentWind + " MPH"
        currentForecast.append(currentCityItem, currentDateItem, currentTempItem, currentHumidityItem, currentWindItem)

        
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
        //History button
        const historyButton = document.createElement('button');
        historyButton.textContent = cityName;
        historyButton.classList.add("historyButton", "button", "is-black"); 

        // Save weather details to the button
        historyButton.dataset.temp = currentTemp;
        historyButton.dataset.humidity = currentHumidity;
        historyButton.dataset.wind = currentWind;
        historyButton.dataset.date = currentDateFormated;
        historyButton.dataset.city = cityName
        const days = [
            { temp: dayOneTemp, humidity: dayOneHumidity, wind: dayOneWind, date: dayOneDateFormated },
            { temp: dayTwoTemp, humidity: dayTwoHumidity, wind: dayTwoWind, date: dayTwoDateFormated },
            { temp: dayThreeTemp, humidity: dayThreeHumidity, wind: dayThreeWind, date: dayThreeDateFormated },
            { temp: dayFourTemp, humidity: dayFourHumidity, wind: dayFourWind, date: dayFourDateFormated },
            { temp: dayFiveTemp, humidity: dayFiveHumidity, wind: dayFiveWind, date: dayFiveDateFormated }
        ];
        
        for (let i = 0; i < days.length; i++) {
            historyButton.dataset[`day${i + 1}Temp`] = days[i].temp;
            historyButton.dataset[`day${i + 1}Humidity`] = days[i].humidity;
            historyButton.dataset[`day${i + 1}Wind`] = days[i].wind;
            historyButton.dataset[`day${i + 1}Date`] = days[i].date;
        }

        

        // Append button to the history container
        historyContainer.appendChild(historyButton);


        
        // Save the city to localStorage
        let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    });
};

document.getElementById('searchBtn').addEventListener('click', getWeather);

historyContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('historyButton')) {
        let button = event.target;

        let cityName = button.dataset.city;
        let temp = button.dataset.temp;
        let humidity = button.dataset.humidity;
        let wind = button.dataset.wind;
        let date = button.dataset.date;

        let dayOneTemp = button.dataset.day1temp;
        let dayOneHumidity = button.dataset.day1humidity;
        let dayOneWind = button.dataset.day1wind;
        let dayOneDate = button.dataset.day1date;
        
        let dayTwoTemp = button.dataset.day2temp;
        let dayTwoHumidity = button.dataset.day2humidity;
        let dayTwoWind = button.dataset.day2wind;
        let dayTwoDate = button.dataset.day2date;
        
        let dayThreeTemp = button.dataset.day3temp;
        let dayThreeHumidity = button.dataset.day3humidity;
        let dayThreeWind = button.dataset.day3wind;
        let dayThreeDate = button.dataset.day3date;
        
        let dayFourTemp = button.dataset.day4temp;
        let dayFourHumidity = button.dataset.day4humidity;
        let dayFourWind = button.dataset.day4wind;
        let dayFourDate = button.dataset.day4date;
        
        let dayFiveTemp = button.dataset.day5temp;
        let dayFiveHumidity = button.dataset.day5humidity;
        let dayFiveWind = button.dataset.day5wind;
        let dayFiveDate = button.dataset.day5date;
        
        
        

        // Update the DOM with the saved data from the clicked button
        // Example:
        currentTempText.textContent = "Temp: " + temp + " F°";
        currentHumidityText.textContent = "Humidity: " + humidity + "%";
        currentWindText.textContent = "Wind: " + wind + " MPH";
        cityText.textContent = cityName
        currentDateText.textContent = date

        // Day 1
        dayOneDateText.textContent = dayOneDate;
        dayOneTempText.textContent = "Temp: " + dayOneTemp + " F°";
        dayOneHumidityText.textContent = "Humidity: " + dayOneHumidity + " %";
        dayOneWindText.textContent = "Wind: " + dayOneWind + " MPH";

        // Day 2
        dayTwoDateText.textContent = dayTwoDate;
        dayTwoTempText.textContent = "Temp: " + dayTwoTemp + " F°";
        dayTwoHumidityText.textContent = "Humidity: " + dayTwoHumidity + " %";
        dayTwoWindText.textContent = "Wind: " + dayTwoWind + " MPH";

        // Day 3
        dayThreeDateText.textContent = dayThreeDate;
        dayThreeTempText.textContent = "Temp: " + dayThreeTemp + " F°";
        dayThreeHumidityText.textContent = "Humidity: " + dayThreeHumidity + " %";
        dayThreeWindText.textContent = "Wind: " + dayThreeWind + " MPH";

        // Day 4
        dayFourDateText.textContent = dayFourDate;
        dayFourTempText.textContent = "Temp: " + dayFourTemp + " F°";
        dayFourHumidityText.textContent = "Humidity: " + dayFourHumidity + " %";
        dayFourWindText.textContent = "Wind: " + dayFourWind + " MPH";

        // Day 5
        dayFiveDateText.textContent = dayFiveDate;
        dayFiveTempText.textContent = "Temp: " + dayFiveTemp + " F°";
        dayFiveHumidityText.textContent = "Humidity: " + dayFiveHumidity + " %";
        dayFiveWindText.textContent = "Wind: " + dayFiveWind + " MPH";


    }
});

// Load previous searches from localStorage
let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
document.getElementById('historyContainer').innerHTML = searchHistory.map(city => `<li>${city}</li>`).join('');
