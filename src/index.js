function updateTime(Time) {
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = `${londonTime.format(
    "hh:mm:ss"
  )} <small>${londonTime.format("A")}`;

  let madridElement = document.querySelector("#madrid");
  let madridDateElement = madridElement.querySelector(".date");
  let madridTimeElement = madridElement.querySelector(".time");

  let madridTime = moment().tz("Europe/Madrid");

  madridDateElement.innerHTML = madridTime.format("MMMM Do YYYY");
  madridTimeElement.innerHTML = `${madridTime.format(
    "hh:mm:ss"
  )} <small>${madridTime.format("A")}`;

  let seoulElement = document.querySelector("#seoul");
  let seoulDateElement = seoulElement.querySelector(".date");
  let seoulTimeElement = seoulElement.querySelector(".time");

  let seoulTime = moment().tz("Asia/Seoul");

  seoulDateElement.innerHTML = seoulTime.format("MMMM Do YYYY");
  seoulTimeElement.innerHTML = `${seoulTime.format(
    "hh:mm:ss"
  )} <small>${seoulTime.format("A")}`;
}

function handleCityChange(event) {
  if (event.target.value === "currentTime") {
    selectedTimeZone = moment.tz.guess();
  } else {
    selectedTimeZone = event.target.value;
  }
  updateCity();
}

function updateCity() {
  let cityName = selectedTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(selectedTimeZone);

  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("hh:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
    </div>

    <a href="index.html">All cities</a>
  `;
}

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", handleCityChange);

setInterval(updateTime, 1000);
setInterval(updateCity, 1000);
