// Step 1: Create a Person object

const Person = {
  name: "Benny Chrispin",
  age: 22,
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  },
};

Person.greet();

// Step 2: Use call(), apply(), and bind()

const anotherPerson = {
  name: "Nkusi Benny",
  age: 21,
};

// Using call()
Person.greet.call(anotherPerson);

// // Using apply()
Person.greet.apply(anotherPerson);

// Using bind()
const boundGreet = Person.greet.bind(anotherPerson);
boundGreet();
