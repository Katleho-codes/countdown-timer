let daysElement = document.getElementById("days");
let hoursElement = document.getElementById("hours");
let minutesElement = document.getElementById("minutes");
let secondsElement = document.getElementById("seconds");
let elementTextDays_ = document.querySelector(".elementTextDays");
let elementTextHours_ = document.querySelector(".elementTextHours");
let elementTextMinutes_ = document.querySelector(".elementTextMinutes");
let elementTextSeconds_ = document.querySelector(".elementTextSeconds");

// Awaited date
let awaitedDate = new Date("Jan 1, 2022 ");

let countdownFunction = setInterval(
  (dateFunction = () => {
    //todays date
    let todaysDate = new Date();
    // minues upcoming dates from todays date
    let subtractDates = awaitedDate - todaysDate;
    // days
    let days = Math.floor(subtractDates / (1000 * 60 * 60 * 24));
    daysElement.innerHTML = days;
    elementTextDays_.innerHTML = "Days";
    // hours
    let hours = Math.floor(
      (subtractDates % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    hoursElement.innerHTML = hours;
    elementTextHours_.innerHTML = "Hours";
    // minutes
    let minutes = Math.floor((subtractDates % (1000 * 60 * 60)) / (1000 * 60));
    minutesElement.innerHTML = minutes;
    elementTextMinutes_.innerHTML = "Minutes";
    // seconds
    let seconds = Math.floor((subtractDates % (1000 * 60)) / 1000);
    secondsElement.innerHTML = seconds;
    elementTextSeconds_.innerHTML = "Seconds";

    // when the countdown ends
    if (subtractDates < 0) {
      clearInterval();
      document.getElementById("display-text").innerHTML = "Happy New Years!!!";
      daysElement.style.display = "none";
      hoursElement.style.display = "none";
      hoursElement.style.display = "none";
      minutesElement.style.display = "none";
      secondsElement.style.display = "none";
      elementTextDays_.style.display = "none";
      elementTextHours_.style.display = "none";
      elementTextMinutes_.style.display = "none";
      elementTextSeconds_.style.display = "none";
    }
  }),
  1000
);
