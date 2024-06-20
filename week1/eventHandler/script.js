// Step 2: Attach an event listener to the button

const button = document.getElementById("myButton");

function handleClick() {
  console.log(this.id);
  console.log(this.textContent);
}

button.addEventListener("click", handleClick);

// Step 3: Use an arrow function for the event listener

button.addEventListener("click", () => {
  console.log(this);
});
