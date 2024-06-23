// 3. Time Formatting

// Task: Add methods to the Clock object for formatting time.

function Clock() {
  const currentTime = new Date();
  this.hours = currentTime.getHours();
  this.minutes = currentTime.getMinutes();
  this.seconds = currentTime.getSeconds();
}

Clock.prototype.getFormattedTime = function () {
  const pad = (num) => (num < 10 ? "0" : "") + num;
  return `${pad(this.hours)}:${pad(this.minutes)}:${pad(this.seconds)}`;
};

Clock.prototype.get12HourTime = function () {
  const period = this.hours >= 12 ? "PM" : "AM";
  const hours12 = this.hours % 12 || 12;
  const pad = (num) => (num < 10 ? "0" : "") + num;
  return `${pad(hours12)}:${pad(this.minutes)}:${pad(this.seconds)} ${period}`;
};

const myClock = new Clock();
console.log("Formatted Time:", myClock.getFormattedTime());
console.log("12 Hour Time:", myClock.get12HourTime());
