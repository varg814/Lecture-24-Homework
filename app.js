let days = document.getElementById("days");
let daysContent = parseFloat(prompt("enter days: "));
days.innerHTML = daysContent;

let hours = document.getElementById("hours");
let hoursContent = parseFloat(prompt("enter hours: "));
let hoursC = hoursContent;
let hoursCC = hoursContent;
hours.innerHTML = hoursContent;

let minutes = document.getElementById("minutes");
let minutesContent = parseFloat(prompt("enter minutes: "));
let minutesC = minutesContent;
let minutesCC = minutesContent;
minutes.innerHTML = minutesContent;

let seconds = document.getElementById("seconds");
let secondsContent = parseFloat(prompt("enter seconds: "));
let secondsC = secondsContent;
let secondsCC = secondsContent;
seconds.innerHTML = secondsContent;

let index = 0;
let index2 = 0;

let secondsInterval = setInterval(() => {
  secondsContent--;
  seconds.innerHTML = secondsContent;
  index++;
  index2++;
  if (secondsContent === 0) {
    secondsContent = 60;
  }

  if (secondsContent === 59) {
    minutesContent--;
    minutes.innerHTML = minutesContent;
  }

  if (minutesContent === 0) {
    minutesContent = 60;
  }

  if (index === secondsC + minutesC * 60 + 1) {
    hoursContent--;
    hours.innerHTML = hoursContent;
  }

  if (hoursContent === 0) {
    hoursContent = 24;
  }

  if (index > secondsC + minutesC * 60 + 1) {
    index = 0;
    secondsC = 59;
    minutesC = 59;
  }

  if (index2 === secondsCC + minutesCC * 60 + hoursCC * 3600 + 1) {
    daysContent--;
    days.innerHTML = daysContent;
  }

  if (index2 > secondsCC + minutesCC * 60 + hoursCC * 3600 + 1) {
    index2 = 0;
    secondsCC = 59;
    minutesCC = 59;
    hoursCC = 23;
  }

  console.log(index);
  console.log(secondsC + minutesC * 60 + 1);
  console.log(index2);
  console.log(secondsCC + minutesCC * 60 + hoursCC * 3600 + 1);
}, 1000);
