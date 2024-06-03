let data;
const inputname = document.getElementById("inputname");
const countryname = document.querySelector("#countryname");
const statename =  document.querySelector("#statename");
const cityname = document.querySelector("#cityname");
const humidity = document.querySelector("#humidity");
const wspeed = document.querySelector("#windspeed");
const temp = document.querySelector("#temperature");
const imglogo = document.querySelector("#logoimage");

const getData = async (event) => {
    event.preventDefault();
    const city = inputname.value; // Corrected this line
    if (!city) { // Check if the city value is empty
        alert("Enter the city :(");
        return;
    }
    const fetchData = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=efdcd4c2ffba4678a8a51713240306&q=${city}`
    );
    const orgData = await fetchData.json();
    data = orgData;
    console.log(data); 
    countryname.innerText= data.location.country;
    statename.innerText = data.location.region;
    cityname.innerText = data.location.name;
    humidity.innerText = `${data.current.humidity}%`;
    wspeed.innerText = `${data.current.wind_kph} KMPH`;
    temp.innerText = `${data.current.temp_c}℃`;
    imglogo.src = data.current.condition.icon;
    document.querySelector("#weatherstatus").innerText = data.current.condition.text;

}