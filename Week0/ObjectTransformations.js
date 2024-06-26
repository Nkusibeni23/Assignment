// fullName(person)

function fullName(person) {
  if (typeof person !== "object" || !person) return "";
  return `${person.firstName} ${person.lastName}`;
}

// Example usage
const personExample = {
  firstName: "Benny",
  lastName: "Chrispin",
};

const personFullName = fullName(personExample);

console.log(personFullName);

// // isAdult(person)

function isAdult(person) {
  if (typeof person !== "object" || !person || typeof person.age !== "number")
    return false;
  return person.age >= 18;
}
// Example usage
const personExample2 = {
  firstName: "Benny",
  lastName: "Chrispin",
  age: 22,
};
const personDetails = isAdult(personExample2);
console.log(personDetails);

// // filterByAge(people, minAge)

function filterByAge(people, minAge) {
  if (!Array.isArray(people) || typeof minAge !== "number") return [];
  return people.filter((person) => person.age >= minAge);
}
// Example usage
const people = [
  {
    firstName: "Benny",
    lastName: "Chrispin",
    age: 22,
  },
  {
    firstName: "John",
    lastName: "Doe",
    age: 17,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
  },
];
const adults = filterByAge(people, 18);
console.log(adults);
