// 2. Object-Oriented Clock

// Task: Design a Clock object with properties for hours, minutes, and seconds.

function Clock() {
  const currentTime = new Date();
  this.hours = currentTime.getHours();
  this.minutes = currentTime.getMinutes();
  this.seconds = currentTime.getSeconds();
}

const myClock = new Clock();
console.log(
  `Hours: ${myClock.hours}, Minutes: ${myClock.minutes}, Seconds: ${myClock.seconds}`
);
