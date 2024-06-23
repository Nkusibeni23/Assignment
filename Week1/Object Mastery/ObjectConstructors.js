// 3. Object Constructors

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

let hero1 = new Superhero(
  "Captain Code",
  "Alice Johnson",
  ["Flight", "Super Strength", "Telepathy"],
  "Kryptonite"
);
let hero2 = new Superhero(
  "Invisible Shadow",
  "Bob Smith",
  ["Invisibility", "Agility"],
  "Light"
);

hero1.usePower("Flight");
hero2.revealIdentity();
