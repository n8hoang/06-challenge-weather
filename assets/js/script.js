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
        const currentDate = data.list[0].dt_text;

        
        const dayOneTemp = data.list[8].main.temp;
        const dayOneHumidity = data.list[8].main.humidity;
        const dayOneWind = data.list[8].wind.speed;
        const dayOneDate = data.list[8].dt_txt;
        
        const dayTwoTemp = data.list[16].main.temp;
        const dayTwoHumidity = data.list[16].main.humidity;
        const dayTwoWind = data.list[16].wind.speed;
        const dayTwoDate = data.list[16].dt_txt;
        
        const dayThreeTemp = data.list[24].main.temp;
        const dayThreeHumidity = data.list[24].main.humidity;
        const dayThreeWind = data.list[24].wind.speed;
        const dayThreeDate = data.list[24].dt_txt;
        
        const dayFourTemp = data.list[32].main.temp;
        const dayFourHumidity = data.list[32].main.humidity;
        const dayFourWind = data.list[32].wind.speed;
        const dayFourDate = data.list[32].dt_txt;
        
        const dayFiveTemp = data.list[40].main.temp;
        const dayFiveHumidity = data.list[40].main.humidity;
        const dayFiveWind = data.list[40].wind.speed;
        const dayFiveDate = data.list[40].dt_txt;

        
        // Save the city to localStorage
        let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        searchHistory.push(cityName);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    });
});

// Load previous searches from localStorage
let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
document.getElementById('searchHistory').innerHTML = searchHistory.map(city => `<li>${city}</li>`).join('');
