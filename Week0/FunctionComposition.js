// Define necessary functions
function capitalize(str) {
  if (typeof str !== "string" || str.length === 0) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverse(str) {
  if (typeof str !== "string") return "";
  return str.split("").reverse().join("");
}

function double(num) {
  return num * 2;
}

function filterEven(arr) {
  return arr.filter((num) => num % 2 === 0);
}

// Define compose function
function compose(...fns) {
  return function (initialValue) {
    return fns.reduceRight((acc, fn) => fn(acc), initialValue);
  };
}

// Define a new function to double an array of numbers
function doubleArray(arr) {
  return arr.map((num) => num * 2);
}

// Update compose usage to compose doubleArray with filterEven
const doubleEvenNumbers = compose(doubleArray, filterEven);

// Example usage
const result1 = compose(capitalize, reverse)("Benny");
const result2 = doubleEvenNumbers([1, 2, 3, 4, 5]);

console.log(result1);
console.log(result2);
