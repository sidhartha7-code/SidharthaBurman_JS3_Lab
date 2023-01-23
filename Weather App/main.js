const api={
    key:"7e3f21edee540e6110af347b55eb1ab2",
    base:"https://api.openweathermap.org/data/2.5/"
}

// https://api.openweathermap.org/data/2.5weather?q=${query}&units=metric&appid=${api.key}

// https://github.com/narenm1234/Weather

const searchBox=document.querySelector('.search-box');
searchBox.addEventListener('keypress',setQuery);

function setQuery(event){
    if (event.keyCode==13){
        getResults(searchBox.value);
    }
}

function getResults(query){
    const url=`${api.base}weather?q=${query}&units=metric&appid=${api.key}`;

    fetch(url).then((weather)=>{
        return weather.json()
    }).then((response)=>{
        console.log(response);
        displayResults(response);
    })
}

function displayResults(weather){
    let city=document.querySelector('.location .city');
    city.innerText = `${weather.name},${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    let temp=document.querySelector('.current .temp');
    temp.innerHTML=`${Math.round((weather.main.temp))} <span>°C</span>`;

    let weather_el=document.querySelector('.current .weather');
    weather_el.innerText=  weather.weather[0].main;

    let hillow=document.querySelector('.current .hi-low');
    weather_el.innerText=  weather.weather[0].main;

    hillow.innerText = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`;

}


function dateBuilder(d){
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    var dayName = days[d.getDay()];
    var day = d.getDate();
    var month = monthNames[d.getMonth()];
    var year = d.getFullYear();

  return `${dayName} ${day} ${month} ${year}`;
}