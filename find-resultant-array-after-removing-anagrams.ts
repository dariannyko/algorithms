function removeAnagrams(words: string[]): string[] {
  let prev = "";

  return words.filter((item, index) => {
    const sorted = item.split("").sort().join("");
    if (sorted === prev) {
      return false;
    }

    prev = sorted;
    return true;
  });
}

removeAnagrams(["abba", "baba", "bbaa", "cd", "cd"]); // ["abba","cd"]
removeAnagrams(["a", "b", "c", "d", "e"]); // ["a","b","c","d","e"]
