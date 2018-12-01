// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
//  .replace(/[^\w]/g, '')
//    .toLowerCase()
const stringToMap = str => {
  const newMap = str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .reduce((acc, curr) => {
      if (acc[curr]) {
        acc[curr]++;
      } else {
        acc[curr] = 1;
      }
      return acc;
    }, {});

  return newMap;
};

const stringMapComp = (stringMap1, stringMap2) => {
  for (key in stringMap1) {
    if (stringMap1[key] !== stringMap2[key]) {
      return false;
    }
  }
  return true;
};

function anagrams(stringA, stringB) {
  let stringAMap = stringToMap(stringA);
  let stringBMap = stringToMap(stringB);
  console.log("[A map]", stringA, stringAMap);
  console.log("[B map]", stringB, stringBMap);
  return (
    stringMapComp(stringAMap, stringBMap) &&
    stringMapComp(stringBMap, stringAMap)
  );
}
module.exports = anagrams;
