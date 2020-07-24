// Variables for seconds, minutes and hours
let seconds = 0;
let minutes = 0;
let hours = 0;

// updates the time variables and position of the clock hands every second
let updateTime = () => {
  setInterval(getTimeComponents, 1000);
};

// gets the second, minute and hour values and positions the clock hands
let getTimeComponents = () => {
  let time = new Date();
  seconds = time.getSeconds();
  minutes = time.getMinutes();
  hours = time.getHours();
  console.log(`sec: ${seconds}, min: ${minutes}, hrs: ${hours}`);
  moveSecondHand();
  moveMinuteHand();
  moveHourHand();
};

// positions the second hand acording to the value of seconds
let moveSecondHand = () => {
  console.log("seconds ticking");
  let degrees = seconds * 6 + 90;
  let secondHand = document.getElementById("second-hand");
  secondHand.style.transform = `rotate(${degrees}deg)`;
};

// positions the minute hand acording to the value of minutes
let moveMinuteHand = () => {
  console.log("minutes ticking");
  let degrees = minutes * 6 + 90;
  let minuteHand = document.getElementById("minute-hand");
  minuteHand.style.transform = `rotate(${degrees}deg)`;
};

// positions the hour hand acording to the value of hours
let moveHourHand = () => {
  console.log("hours ticking");
  let degrees = hours * 30 + (minutes / 20) * 6 + 90;
  let hourHand = document.getElementById("hour-hand");
  hourHand.style.transform = `rotate(${degrees}deg)`;
};

// starts the clock when the document loads
document.onload = updateTime();
