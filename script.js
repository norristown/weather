const apiKey = '1a958c20fc9465e8ef2c3dcbf82e0bcd';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&q='

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    var data = await response.json();
    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block'
        document.querySelector('.weather').style.display = 'none'
    } else {
        document.querySelector('.error').style.display = 'none'
        document.querySelector('.weather').style.display = 'block'
        if (data.weather[0].main === "Clouds") {
            weatherIcon.src = 'images/cloud.png'
        } else if (data.weather[0].main === "Clear") {
            weatherIcon.src = 'images/sunny.png'
        } else if (data.weather[0].main === "Rain") {
            weatherIcon.src = 'images/dark-and-stormy.png'
        } else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = 'images/dark-and-stormy.png'
        }
        document.querySelector('.city').innerHTML = data.name
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°F'
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%'
        document.querySelector('.windy').innerHTML = data.wind.speed + 'MPH'
    }




    console.log(data)

}


searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value)
})
