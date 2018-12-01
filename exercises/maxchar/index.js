// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const strMap = str.split("").reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  let maxChar = "";
  let maxNum = 0;
  for (key in strMap) {
    if (strMap[key] > maxChar) {
      maxNum = strMap[key];
      maxChar = key;
    }
  }
  return maxChar;
}

module.exports = maxChar;
