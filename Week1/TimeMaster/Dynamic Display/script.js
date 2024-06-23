function Clock() {
  this.updateTime();
}

Clock.prototype.updateTime = function () {
  const currentTime = new Date();
  this.hours = currentTime.getHours();
  this.minutes = currentTime.getMinutes();
  this.seconds = currentTime.getSeconds();
};

Clock.prototype.getFormattedTime = function () {
  const pad = (num) => (num < 10 ? "0" : "") + num;
  return `${pad(this.hours)}:${pad(this.minutes)}:${pad(this.seconds)}`;
};

Clock.prototype.start = function () {
  this.updateTime();
  const display = document.getElementById("clock");
  display.innerText = this.getFormattedTime();

  setInterval(() => {
    this.updateTime();
    display.innerText = this.getFormattedTime();
  }, 1000);
};

const myClock = new Clock();
myClock.start();
