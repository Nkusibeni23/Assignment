// 5. Object Iteration and Transformation

// Define the Superhero constructor function
function Superhero(name, secretIdentity, powers, weakness) {
  this.name = name;
  this.secretIdentity = secretIdentity;
  this.powers = powers;
  this.weakness = weakness;
}

Superhero.prototype.usePower = function (powerName) {
  if (this.powers.includes(powerName)) {
    console.log(`${this.name} uses ${powerName}!`);
  } else {
    console.log(`${this.name} does not have the power: ${powerName}.`);
  }
};

Superhero.prototype.revealIdentity = function () {
  console.log(`The secret identity of ${this.name} is ${this.secretIdentity}.`);
};

// Create an array of Superhero objects
let characters = [
  new Superhero(
    "Captain Code",
    "Alice Johnson",
    ["Flight", "Super Strength", "Telepathy"],
    "Kryptonite"
  ),
  new Superhero(
    "Invisible Shadow",
    "Bob Smith",
    ["Invisibility", "Agility"],
    "Light"
  ),
  new Superhero(
    "Nightmare",
    "Eve Black",
    ["Night Vision", "Teleportation"],
    "Sunlight"
  ),
  new Superhero(
    "Dr. Evil",
    "Tom Hanks",
    ["Mind Control", "Telekinesis"],
    "Sound"
  ),
];

// Iterate over each character and log their powers
characters.forEach((character) => {
  console.log(
    `${character.name} has the following powers: ${character.powers.join(", ")}`
  );
});

// Filter out heroes with 'Sound' weakness
let heroes = characters.filter((character) => character.weakness !== "Sound");
console.log("Heroes without 'Sound' weakness:", heroes);

// Map to get the names of all characters
let heroNames = characters.map((character) => character.name);
console.log("All character names:", heroNames);
