async function getWeather() {
    const apiKey = 'b6f5d048f56a77c466c326fedd862846'; 
    // Replace 'YOUR_API_KEY' with your actual API key
    const location = document.getElementById('locationInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>${data.weather[0].description}</p>
            <p>Temperature: ${data.main.temp} &#8451;</p>
            <p>Humidity: ${data.main.humidity} %</p>
        `;
    } catch (error) {
        console.error('Error fetching data: ', error);
        document.getElementById('weatherInfo').innerHTML = 'Failed to get weather data. Please try again.';
    }
}
