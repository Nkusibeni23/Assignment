// double(arr)
function double(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.map((num) => num * 2);
}

// filterEven(arr)
function filterEven(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.filter((num) => num % 2 !== 0);
}

// sum(arr)
function sum(arr) {
  if (!Array.isArray(arr)) return 0;
  return arr.reduce((acc, num) => acc + num, 0);
}

// average(arr)
function average(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return 0;
  return sum(arr) / arr.length;
}
