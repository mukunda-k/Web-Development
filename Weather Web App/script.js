const inputname = document.getElementById("inputname");
const countryname = document.querySelector("#countryname");
const statename = document.querySelector("#statename");
const cityname = document.querySelector("#cityname");
const humidity = document.querySelector("#humidity");
const wspeed = document.querySelector("#windspeed");
const temp = document.querySelector("#temperature");
const imglogo = document.querySelector("#logoimage");
const weatherstatus = document.querySelector("#weatherstatus");
const loading = document.getElementById('loading');

async function getData(event) {
    event.preventDefault();
    const city = inputname.value;
    if (!city) {
        alert('Please enter a city name');
        return;
    }

    loading.style.display = 'block';

    try {
        const response = await fetch(
            `http://api.weatherapi.com/v1/current.json?key=efdcd4c2ffba4678a8a51713240306&q=${city}`
        );
        const data = await response.json();

        if (response.ok) {
            countryname.innerText = data.location.country;
            statename.innerText = data.location.region;
            cityname.innerText = data.location.name;
            humidity.innerText = data.current.humidity + '%';
            wspeed.innerText = data.current.wind_kph + ' KMPH';
            temp.innerText = data.current.temp_c + ' ℃';
            weatherstatus.innerText = data.current.condition.text;
            imglogo.src = data.current.condition.icon;
        } else {
            alert('City not found');
        }
    } catch (error) {
        alert('Failed to retrieve data');
    } finally {
        loading.style.display = 'none';
    }
}
