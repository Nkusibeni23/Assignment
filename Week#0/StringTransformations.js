// capitalize(str)
function capitalize(str) {
  if (typeof str !== "string" || str.length === 0) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// reverse(str)
function reverse(str) {
  if (typeof str !== "string") return "";
  return str.split("").reverse().join("");
}
// isPalindrome(str)
function isPalindrome(str) {
  if (typeof str !== "string") return false;
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
// wordCount(str)
function wordCount(str) {
  if (typeof str !== "string") return 0;
  return str.trim().split(/\s+/).length;
}
