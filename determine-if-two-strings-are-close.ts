// TODO: solve using DP
function closeStrings(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) return false;

  const map1 = new Map();
  const map2 = new Map();

  for (let i = 0; i < word1.length; i++) {
    map1.set(word1[i], (map1.get(word1[i]) || 0) + 1);
    map2.set(word2[i], (map2.get(word2[i]) || 0) + 1);
  }

  const arr1: string[] = [];
  const arr2: string[] = [];

  for (const [key, value] of map1) {
    if (!map2.has(key)) return false;

    arr1.push(value);
    arr2.push(map2.get(key));
  }

  return arr1.sort().toString() === arr2.sort().toString();
}

closeStrings("cabbba", "abbccc"); // true
