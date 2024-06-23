// 1. Time Object Basics

// Task: Create a JavaScript Date object to represent the current time and extract hours, minutes, and seconds.

const currentTime = new Date();

const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
const seconds = currentTime.getSeconds();

console.log(`Current time: ${hours}:${minutes}:${seconds}`);
