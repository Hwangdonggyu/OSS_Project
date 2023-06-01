const apiKey = "02b49f3f0bfb423b6ec8846c057d4ba4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const apiUrl_dust = "http://api.openweathermap.org/data/2.5/air_pollution?"; //lat={lat}&lon={lon}&appid={API key}
// 37이상 나쁨
// 구현해야 할 것 : 엔터키로 넘어가게 하기, 그냥 서치 눌렀을 때 에러 페이지(안넘어가게)

const searchBox = document.querySelector(".dropdown .selected");  
const weatherIcon = document.querySelector(".weather-icon");
const main = document.querySelector('#main');
const result = document.querySelector('#result');
const dropdowns = document.querySelectorAll('.dropdown');

let lat_ = null;
let lon_ = null;
let degree = null;

function begin(){
    main.style.animation="fadeOut 1s";
    setTimeout(() => {
        result.style.animation="fadeIn 1s";
        setTimeout(() => {
            main.style.display = "none";  //display 꺼줌
            result.style.display = "block";  //display 켜줌
        }, 450)
    }, 450);
}

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if(response.status == 404){
        document.querySelector(".error").style.display= "block";
        document.querySelector(".weather").style.display= "none";
    } else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        lat_ = data.coord.lat;
        lon_ = data.coord.lon;

        const response_dust = await fetch(apiUrl_dust + "lat=" + lat_ + "&lon=" + lon_ + "&appid=" + apiKey);
        var data_dust = await response_dust.json()

        if(data_dust.list[0].components.pm10 < 20) {
            degree = "미세먼지 좋음";
        }
        else if(data_dust.list[0].components.pm10 < 45) {
            degree = "미세먼지 보통";
        }
        else if(data_dust.list[0].components.pm10 < 75) {
            degree = "미세먼지 나쁨";
        }
        else if(data_dust.list[0].components.pm10 >= 75 ) {
            degree = "미세먼지 매우나쁨";
        }

        document.querySelector(".dust").innerHTML = data_dust.list[0].components.pm10 + " ㎍/㎥";  //미세먼지
        document.querySelector(".degree").innerHTML = degree;

        if(data.coord.lat)

        if(data.weather[0].main == "Clouds") {
            weatherIcon.src = "./image/clouds.png";
        }
        else if(data.weather[0].main == "Clear") {
            weatherIcon.src = "./image/clear.png";
        }
        else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "./image/rain.png";
        }
        else if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "./image/drizzle.png";
        }
        else if(data.weather[0].main == "Mist") {
            weatherIcon.src = "./image/mist.png";
        }

        todayClothes(data);


        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display= "none";

    }
}

function doaction(){
    main.style.animation="fadeIn 1s";
    setTimeout(() => {
        result.style.animation="fadeOut 1s";
        setTimeout(() => {
            main.style.display = "block";  //display 꺼줌
            result.style.display = "none";  //display 켜줌

            const selected = document.querySelector('.dropdown .selected');
            selected.innerText = "-지역 선택-";
            const options = document.querySelectorAll('.dropdown .menu li');
            options.forEach(option => {
            option.classList.remove('active');
         })
        }, 450)
    }, 450);
}

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });
 
    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            const cityValue = option.getAttribute('data-value');
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(opt => {
                opt.classList.remove('active');
            });
            option.classList.add('active');

            if (cityValue !== 'none') {
            begin();
            checkWeather(cityValue);
            }
        });
    });
});
