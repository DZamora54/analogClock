let seconds = 0;
let minutes = 0;
let hours = 0;


let updateTime = () => {
    setInterval(getTimeComponents, 1000);
}

let getTimeComponents = () => {
    let time = new Date();
    seconds = time.getSeconds();
    minutes = time.getMinutes();
    hours = time.getHours();
    console.log(`sec: ${seconds}, min: ${minutes}, hrs: ${hours}`);
    moveSecondHand();
    moveMinuteHand();
    moveHourHand();    
}

let moveSecondHand = () => {
    console.log("seconds ticking")
    let degrees = (seconds * 6) + 90;
    let secondHand = document.getElementById("second-hand");
    secondHand.style.transform = `rotate(${degrees}deg)`;
}

let moveMinuteHand = () => {
    console.log("minutes ticking")
    let degrees = (minutes * 6) + 90;
    let minuteHand = document.getElementById("minute-hand");
    minuteHand.style.transform = `rotate(${degrees}deg)`;
}

let moveHourHand = () => {
    console.log("hours ticking")
    let degrees = (hours * 30) + ((minutes / 20) * 6) + 90;
    let hourHand = document.getElementById("hour-hand");
    hourHand.style.transform = `rotate(${degrees}deg)`;
}


document.onload = updateTime();