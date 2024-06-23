// 2. Methods and Functionality
let superhero = {
  name: "Captain Code",
  secretIdentity: "Alice Johnson",
  powers: ["Flight", "Super Strength", "Telepathy"],
  weakness: "Kryptonite",

  usePower: function (powerName) {
    if (this.powers.includes(powerName)) {
      console.log(`${this.name} uses ${powerName}!`);
    } else {
      console.log(`${this.name} does not have the power: ${powerName}.`);
    }
  },

  revealIdentity: function () {
    console.log(
      `The secret identity of ${this.name} is ${this.secretIdentity}.`
    );
  },
};

superhero.usePower("Flight");
superhero.revealIdentity();
