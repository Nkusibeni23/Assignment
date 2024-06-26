// double(arr)
function double(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.map((num) => num * 2);
}

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = double(numbers);
console.log(numbers);
console.log(doubledNumbers);

// // filterEven(arr)
function filterEven(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.filter((num) => num % 2 !== 0);
}

const numbers2 = [1, 2, 3, 4, 5];
const oddNumbers = filterEven(numbers2);
console.log(oddNumbers);

// // sum(arr)
function sum(arr) {
  if (!Array.isArray(arr)) return 0;
  return arr.reduce((acc, num) => acc + num, 0);
}

const numbers3 = [1, 2, 3, 4, 5];
const totalSum = sum(numbers3);
console.log(totalSum);

// // average(arr)
function average(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return 0;
  return sum(arr) / arr.length;
}

const numbers4 = [1, 2, 3, 4, 5];
const averageValue = average(numbers4);
console.log(averageValue);
