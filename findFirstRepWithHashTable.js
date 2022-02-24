// Hash Table
// Why we need to store key as we do in objects

const word = "hello";

function findFirstRep(str) {
  const table = {};

  for (const char of str) {
    if (table[char]) {
      return char;
    }
    table[char] = 1;
  }

  return null;
}

// Time Complexity: O(n)

console.log(findFirstRep(word));
