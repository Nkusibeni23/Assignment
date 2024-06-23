function Clock(format = "24") {
  this.format = format;
  this.alarmTime = null;
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

Clock.prototype.get12HourTime = function () {
  const period = this.hours >= 12 ? "PM" : "AM";
  const hours12 = this.hours % 12 || 12;
  const pad = (num) => (num < 10 ? "0" : "") + num;
  return `${pad(hours12)}:${pad(this.minutes)}:${pad(this.seconds)} ${period}`;
};

Clock.prototype.checkAlarm = function () {
  const currentTime = `${this.getFormattedTime()}`;
  if (currentTime === this.alarmTime) {
    alert("Alarm! Time to wake up!");
  }
};

Clock.prototype.start = function () {
  this.updateTime();
  const display = document.getElementById("clock");
  display.innerText =
    this.format === "24" ? this.getFormattedTime() : this.get12HourTime();

  setInterval(() => {
    this.updateTime();
    display.innerText =
      this.format === "24" ? this.getFormattedTime() : this.get12HourTime();
    this.checkAlarm();
  }, 1000);
};

function updateFormat() {
  const format = document.getElementById("format").value;
  myClock.format = format;
}

function setAlarm() {
  const alarmInput = document.getElementById("alarm").value;
  myClock.alarmTime = alarmInput;
}

const myClock = new Clock();
myClock.start();
