let searchBar = document.querySelector(".searchBar");
let input = document.querySelector(".text");
let btn = document.querySelector(".btn1");

searchBar.addEventListener("submit", function (event) {
  event.preventDefault();

  let city = input.value.trim();
  console.log(city);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6b794fb74821246890cf8cffaf48a36e`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let celsius = document.querySelector(".celsius");
      let temperature = data.main.temp - 273.15;
      let location = document.querySelector(".location");
      let time = document.querySelector(".time");
      const d = new Date();
      let text = d.toLocaleTimeString();
      let tempMax = document.querySelector(".temp");
      let tempMin = document.querySelector(".min");
      let humadity = document.querySelector(".percent");
      humadity.textContent = `${data.main.humidity}%`;
      let speed =document.querySelector(".speed");
      speed.textContent=`${data.wind.speed}Km/h`;

      celsius.textContent = `${Math.floor(temperature)}°`;
      location.textContent = data.name;
      time.textContent = text;
      tempMax.textContent = `${Math.floor(temperature)}°`;
      tempMin.textContent = `${Math.floor(temperature)}°`;
    });
});
