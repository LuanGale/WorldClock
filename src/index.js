function updateTime(Time) {
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");

  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = `${londonTime.format(
    "HH:mm:ss"
  )} <small>${londonTime.format("A")}`;

  let madridElement = document.querySelector("#madrid");
  let madridDateElement = madridElement.querySelector(".date");
  let madridTimeElement = madridElement.querySelector(".time");

  let madridTime = moment().tz("Europe/Madrid");

  madridDateElement.innerHTML = madridTime.format("MMMM Do YYYY");
  madridTimeElement.innerHTML = `${madridTime.format(
    "HH:mm:ss"
  )} <small>${madridTime.format("A")}`;
}

setInterval(updateTime, 1000);
