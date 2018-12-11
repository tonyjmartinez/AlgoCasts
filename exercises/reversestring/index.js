// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//function reverse(str) {
//  return str.split("").reduce((acc, cur) => cur + acc);
//}

function reverse(str) {
  let rev = "";

  for (let ch of str) {
    rev = ch + rev;
  }

  return rev;
}

module.exports = reverse;
