// 4. Prototypal Inheritance

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

function FlyingSuperhero(name, secretIdentity, powers, weakness, flyingSpeed) {
  Superhero.call(this, name, secretIdentity, powers, weakness);
  this.flyingSpeed = flyingSpeed;
}

FlyingSuperhero.prototype = Object.create(Superhero.prototype);
FlyingSuperhero.prototype.constructor = FlyingSuperhero;

FlyingSuperhero.prototype.fly = function () {
  console.log(`${this.name} flies at a speed of ${this.flyingSpeed} mph!`);
};

let flyingHero = new FlyingSuperhero(
  "Sky High",
  "Charlie Davis",
  ["Flight", "Super Strength"],
  "Thunderstorms",
  500
);
flyingHero.usePower("Flight");
flyingHero.fly();
