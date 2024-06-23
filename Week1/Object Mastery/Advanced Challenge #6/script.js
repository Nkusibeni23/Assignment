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

function createBattleSimulator(hero1, hero2) {
  const battlefield = document.getElementById("battlefield");

  const hero1Div = document.createElement("div");
  hero1Div.className = "hero";
  hero1Div.innerHTML = `
      <h2>${hero1.name}</h2>
      <p>Secret Identity: ${hero1.secretIdentity}</p>
      <p>Powers: ${hero1.powers.join(", ")}</p>
      <p>Weakness: ${hero1.weakness}</p>
      <button onclick="hero1.usePower('${hero1.powers[0]}')">Use Power</button>
      <button onclick="hero1.revealIdentity()">Reveal Identity</button>
    `;

  const hero2Div = document.createElement("div");
  hero2Div.className = "hero";
  hero2Div.innerHTML = `
      <h2>${hero2.name}</h2>
      <p>Secret Identity: ${hero2.secretIdentity}</p>
      <p>Powers: ${hero2.powers.join(", ")}</p>
      <p>Weakness: ${hero2.weakness}</p>
      <button onclick="hero2.usePower('${hero2.powers[0]}')">Use Power</button>
      <button onclick="hero2.revealIdentity()">Reveal Identity</button>
    `;

  battlefield.appendChild(hero1Div);
  battlefield.appendChild(hero2Div);
}

createBattleSimulator(hero1, hero2);
