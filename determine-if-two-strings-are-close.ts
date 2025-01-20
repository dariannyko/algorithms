// function closeStrings(word1: string, word2: string): boolean {
//   if (word1.length !== word2.length) return false;

//   const map1 = new Map();
//   const map2 = new Map();

//   for (let i = 0; i < word1.length; i++) {
//     map1.set(word1[i], (map1.get(word1[i]) || 0) + 1);
//     map2.set(word2[i], (map2.get(word2[i]) || 0) + 1);
//   }

//   const arr1: string[] = [];
//   const arr2: string[] = [];

//   for (const [key, value] of map1) {
//     if (!map2.has(key)) return false;

//     arr1.push(value);
//     arr2.push(map2.get(key));
//   }

//   return arr1.sort().toString() === arr2.sort().toString();
// }

function closeStrings(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) return false;

  const frequency1 = new Array(26).fill(0);
  const frequency2 = new Array(26).fill(0);

  for (let i = 0; i < word1.length; i++) {
    frequency1[word1.charCodeAt(i) - 97]++;
    frequency2[word2.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i < frequency1.length; i++) {
    if ((frequency1[i] === 0) !== (frequency2[i] === 0)) return false;
  }

  return frequency1.sort().toString() === frequency2.sort().toString();
}

// closeStrings("cabbba", "abbccc"); // true
console.log(closeStrings("xxxxxxxxxxxxxxxxxxx", "zzzzzzzzzzzzzzzzzzz")); /// false
