// capitalize(str)
function capitalize(str) {
  if (typeof str !== "string" || str.length === 0) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const exampleString = "benny chrispin";
const capitalizedString = capitalize(exampleString);

console.log(capitalizedString);

// // reverse(str)

function reverse(str) {
  if (typeof str !== "string") return "";
  return str.split("").reverse().join("");
}

const exampleReverse = "benny chrispin";
const wordReverse = reverse(exampleReverse);

console.log(wordReverse);

// // isPalindrome(str)
function isPalindrome(str) {
  if (typeof str !== "string") return false;
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

const exampleIsPalindrome = "OMO";
const wordIsPalindrome = isPalindrome(exampleIsPalindrome);

console.log(wordIsPalindrome);

// // wordCount(str)

function wordCount(str) {
  if (typeof str !== "string") return 0;
  return str.trim().split(/\s+/).length;
}

const exampleWordCount = "Benny Chrispin";
const wordIsWordCount = wordCount(exampleWordCount);

console.log(wordIsWordCount);
