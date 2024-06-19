// fullName(person)
function fullName(person) {
  if (typeof person !== "object" || !person) return "";
  return `${person.firstName} ${person.lastName}`;
}

// isAdult(person)
function isAdult(person) {
  if (typeof person !== "object" || !person || typeof person.age !== "number")
    return false;
  return person.age >= 18;
}

// filterByAge(people, minAge)
function filterByAge(people, minAge) {
  if (!Array.isArray(people) || typeof minAge !== "number") return [];
  return people.filter((person) => person.age >= minAge);
}
