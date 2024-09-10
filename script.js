const apiKeys = "9009def0e7e72fc8f37f750818e6e370";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon")




async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKeys}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;


    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";

    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

    if(data.weather[0].main == "Clouds"){
        weathericon.src="images/clouds.png"
    }
    else if( data.weather[0].main == "Rain"){
        weathericon.src="images/rain.png"
    }
    else if(data.weather[0].main == "Mist"){
        weathericon.src="images/mist.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weathericon.src="images/drizzle.png"
    }
    else if( data.weather[0].main == "Clear"){
        weathericon.src="images/clear.png"
    }

}


searchBtn.addEventListener("click", () => {
    checkweather(searchbox.value);
})

