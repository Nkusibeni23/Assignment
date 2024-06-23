function createTimer(duration, elementId) {
  let remainingTime = duration;
  const element = document.getElementById(elementId);

  function updateTimer() {
    if (remainingTime > 0) {
      remainingTime--;
      element.textContent = remainingTime;
    } else {
      clearInterval(timerInterval);
      console.log("Timer finished");
    }
  }

  const timerInterval = setInterval(updateTimer, 1000);

  return {
    getTime() {
      return remainingTime;
    },
  };
}

const timer = createTimer(10, "timerDisplay");
