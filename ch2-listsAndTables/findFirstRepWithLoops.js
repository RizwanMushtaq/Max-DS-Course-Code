// Hash Table
//Why we need to store key as we do in objects

const word = "Hello!";
//Write algo to find first repeting algorithm

function findFirstRep(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return str[i];
      }
    }
  }
  return null;
}

//Time complexity of above algo => O(n^2)

console.log(findFirstRep(word));
