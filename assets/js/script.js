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

const currentIconImage = document.querySelector(".currentIcon")
const dayOneIcon = document.querySelector(".dayOneIcon");
const dayTwoIcon = document.querySelector(".dayTwoIcon");
const dayThreeIcon = document.querySelector(".dayThreeIcon");
const dayFourIcon = document.querySelector(".dayFourIcon");
const dayFiveIcon = document.querySelector(".dayFiveIcon")

const getWeather = function() {
    let cityName = document.getElementById('cityInput').value.trim();
    cardContent.textContent = ""
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
        const currentIcon = data.list[0].weather[0].icon
        console.log(currentIcon)
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
        let iconUrl = "https://openweathermap.org/img/wn/" + currentIcon + ".png";
        console.log(iconUrl)
        

        currentIconImage.src = iconUrl
        cityText.textContent = cityName;
        currentDateText.textContent = "Date: " + currentDateFormated;
        currentTempText.textContent = "Temp: " + currentTemp + " F°";
        currentHumidityText.textContent = "Humidity: " + currentHumidity + " %";
        currentWindText.textContent = "Wind: " + currentWind + " MPH"
        currentForecast.append(currentIconImage, cityText, currentDateText, currentTempText, currentHumidityText, currentWindText)

        
        const dayOneTemp = data.list[7].main.temp;
        const dayOneHumidity = data.list[7].main.humidity;
        const dayOneWind = data.list[7].wind.speed;
        const dayOneDate = data.list[7].dt_txt;
        const dayOneIconId = data.list[7].weather[0].icon
        const dayOneDateFormated = (formatDate(dayOneDate))
        dayOneIcon.src = "https://openweathermap.org/img/wn/" + dayOneIconId + ".png";
        dayOneDateText.textContent = "Date: " + dayOneDateFormated;
        dayOneTempText.textContent = "Temp: " + dayOneTemp + " F°";
        dayOneHumidityText.textContent = "Humidity: " + dayOneHumidity + " %";
        dayOneWindText.textContent = dayOneWind + " MPH";
        dayOneForecast.append(dayOneIcon, dayOneDateText, dayOneTempText, dayOneHumidityText, dayOneWindText);

        const dayTwoIconId = data.list[15].weather[0].icon
        const dayTwoTemp = data.list[15].main.temp;
        const dayTwoHumidity = data.list[15].main.humidity;
        const dayTwoWind = data.list[15].wind.speed;
        const dayTwoDate = data.list[15].dt_txt;
        const dayTwoDateFormated = (formatDate(dayTwoDate))
        dayTwoIcon.src = "https://openweathermap.org/img/wn/" + dayTwoIconId + ".png";
        dayTwoDateText.textContent = "Date: " + dayTwoDateFormated;
        dayTwoTempText.textContent = "Temp: " + dayTwoTemp + " F°";
        dayTwoHumidityText.textContent = "Humidity: " + dayTwoHumidity + " %";
        dayTwoWindText.textContent = dayTwoWind + " MPH";
        dayTwoForecast.append(dayTwoIcon, dayTwoDateText, dayTwoTempText, dayTwoHumidityText, dayTwoWindText);

        const dayThreeIconId = data.list[23].weather[0].icon
        const dayThreeTemp = data.list[23].main.temp;
        const dayThreeHumidity = data.list[23].main.humidity;
        const dayThreeWind = data.list[23].wind.speed;
        const dayThreeDate = data.list[23].dt_txt;
        const dayThreeDateFormated = (formatDate(dayThreeDate))
        dayThreeIcon.src = "https://openweathermap.org/img/wn/" + dayThreeIconId + ".png";
        dayThreeDateText.textContent = "Date: " + dayThreeDateFormated;
        dayThreeTempText.textContent = "Temp: " + dayThreeTemp + " F°";
        dayThreeHumidityText.textContent = "Humidity: " + dayThreeHumidity + " %";
        dayThreeWindText.textContent = dayThreeWind + " MPH";
        dayThreeForecast.append(dayThreeIcon, dayThreeDateText, dayThreeTempText, dayThreeHumidityText, dayThreeWindText);
        
        const dayFourIconId = data.list[31].weather[0].icon
        const dayFourTemp = data.list[31].main.temp;
        const dayFourHumidity = data.list[31].main.humidity;
        const dayFourWind = data.list[31].wind.speed;
        const dayFourDate = data.list[31].dt_txt;
        const dayFourDateFormated = (formatDate(dayFourDate))
        dayFourIcon.src = "https://openweathermap.org/img/wn/" + dayFourIconId + ".png";
        dayFourDateText.textContent = "Date: " + dayFourDateFormated;
        dayFourTempText.textContent = "Temp: " + dayFourTemp + " F°";
        dayFourHumidityText.textContent = "Humidity: " + dayFourHumidity + " %";
        dayFourWindText.textContent = dayFourWind + " MPH";
        dayFourForecast.append(dayFourIcon, dayFourDateText, dayFourTempText, dayFourHumidityText, dayFourWindText);
        
        const dayFiveIconId = data.list[39].weather[0].icon
        const dayFiveTemp = data.list[39].main.temp;
        const dayFiveHumidity = data.list[39].main.humidity;
        const dayFiveWind = data.list[39].wind.speed;
        const dayFiveDate = data.list[39].dt_txt;
        const dayFiveDateFormated = (formatDate(dayFiveDate))
        dayFiveIcon.src = "https://openweathermap.org/img/wn/" + dayFiveIconId + ".png";
        dayFiveDateText.textContent = "Date: " + dayFiveDateFormated;
        dayFiveTempText.textContent = "Temp: " + dayFiveTemp + " F°";
        dayFiveHumidityText.textContent = "Humidity: " + dayFiveHumidity + " %";
        dayFiveWindText.textContent = dayFiveWind + " MPH";
        dayFiveForecast.append(dayFiveDateText, dayFiveTempText, dayFiveHumidityText, dayFiveWindText);
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
        historyButton.dataset.icon = currentIconImage.src
        const days = [
            { temp: dayOneTemp, humidity: dayOneHumidity, wind: dayOneWind, date: dayOneDateFormated, icon:dayOneIcon.src },
            { temp: dayTwoTemp, humidity: dayTwoHumidity, wind: dayTwoWind, date: dayTwoDateFormated, icon:dayTwoIcon.src },
            { temp: dayThreeTemp, humidity: dayThreeHumidity, wind: dayThreeWind, date: dayThreeDateFormated, icon:dayThreeIcon.src },
            { temp: dayFourTemp, humidity: dayFourHumidity, wind: dayFourWind, date: dayFourDateFormated, icon:dayFourIcon.src },
            { temp: dayFiveTemp, humidity: dayFiveHumidity, wind: dayFiveWind, date: dayFiveDateFormated, icon:dayFiveIcon.src }
        ];
        
        for (let i = 0; i < days.length; i++) {
            historyButton.dataset[`day${i + 1}Temp`] = days[i].temp;
            historyButton.dataset[`day${i + 1}Humidity`] = days[i].humidity;
            historyButton.dataset[`day${i + 1}Wind`] = days[i].wind;
            historyButton.dataset[`day${i + 1}Date`] = days[i].date;
            historyButton.dataset[`day${i + 1}Icon`] = days[i].icon;
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
        cardContent.textContent = ""
        let button = event.target;

        let currentImage = button.dataset.icon
        let cityName = button.dataset.city;
        let temp = button.dataset.temp;
        let humidity = button.dataset.humidity;
        let wind = button.dataset.wind;
        let date = button.dataset.date;
        
        let dayOneIconBtn = button.dataset.day1Icon
        let dayOneTemp = button.dataset.day1Temp;
        let dayOneHumidity = button.dataset.day1Humidity;
        let dayOneWind = button.dataset.day1Wind;
        let dayOneDate = button.dataset.day1Date;
        
        let dayTwoIconBtn = button.dataset.day2Icon
        let dayTwoTemp = button.dataset.day2Temp;
        let dayTwoHumidity = button.dataset.day2Humidity;
        let dayTwoWind = button.dataset.day2Wind;
        let dayTwoDate = button.dataset.day2Date;
        
        let dayThreeIconBtn = button.dataset.day3Icon
        let dayThreeTemp = button.dataset.day3Temp;
        let dayThreeHumidity = button.dataset.day3Humidity;
        let dayThreeWind = button.dataset.day3Wind;
        let dayThreeDate = button.dataset.day3Date;
        
        let dayFourIconBtn = button.dataset.day4Icon
        let dayFourTemp = button.dataset.day4Temp;
        let dayFourHumidity = button.dataset.day4Humidity;
        let dayFourWind = button.dataset.day4Wind;
        let dayFourDate = button.dataset.day4Date;
        
        let dayFiveIconBtn = button.dataset.day5Icon
        let dayFiveTemp = button.dataset.day5Temp;
        let dayFiveHumidity = button.dataset.day5Humidity;
        let dayFiveWind = button.dataset.day5Wind;
        let dayFiveDate = button.dataset.day5Date;
        
        
        

        // Update the DOM with the saved data from the clicked button
        // Example:
        currentIconImage.src = currentImage
        currentTempText.textContent = "Temp: " + temp + " F°";
        currentHumidityText.textContent = "Humidity: " + humidity + "%";
        currentWindText.textContent = "Wind: " + wind + " MPH";
        cityText.textContent = cityName
        currentDateText.textContent = date

        // Day 1
        dayOneIcon.src = dayOneIconBtn
        dayOneDateText.textContent = dayOneDate;
        dayOneTempText.textContent = "Temp: " + dayOneTemp + " F°";
        dayOneHumidityText.textContent = "Humidity: " + dayOneHumidity + " %";
        dayOneWindText.textContent = "Wind: " + dayOneWind + " MPH";

        // Day 2
        dayTwoIcon.src = dayTwoIconBtn
        dayTwoDateText.textContent = dayTwoDate;
        dayTwoTempText.textContent = "Temp: " + dayTwoTemp + " F°";
        dayTwoHumidityText.textContent = "Humidity: " + dayTwoHumidity + " %";
        dayTwoWindText.textContent = "Wind: " + dayTwoWind + " MPH";

        // Day 3
        dayThreeIcon.src = dayThreeIconBtn
        dayThreeDateText.textContent = dayThreeDate;
        dayThreeTempText.textContent = "Temp: " + dayThreeTemp + " F°";
        dayThreeHumidityText.textContent = "Humidity: " + dayThreeHumidity + " %";
        dayThreeWindText.textContent = "Wind: " + dayThreeWind + " MPH";

        // Day 4
        dayFourIcon.src = dayFourIconBtn
        dayFourDateText.textContent = dayFourDate;
        dayFourTempText.textContent = "Temp: " + dayFourTemp + " F°";
        dayFourHumidityText.textContent = "Humidity: " + dayFourHumidity + " %";
        dayFourWindText.textContent = "Wind: " + dayFourWind + " MPH";

        // Day 5
        dayFiveIcon.src = dayFiveIconBtn
        dayFiveDateText.textContent = dayFiveDate;
        dayFiveTempText.textContent = "Temp: " + dayFiveTemp + " F°";
        dayFiveHumidityText.textContent = "Humidity: " + dayFiveHumidity + " %";
        dayFiveWindText.textContent = "Wind: " + dayFiveWind + " MPH";


    }
});

// Load previous searches from localStorage
let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
document.getElementById('historyContainer').innerHTML = searchHistory.map(city => `<li>${city}</li>`).join('');
