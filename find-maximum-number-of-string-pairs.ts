function maximumNumberOfStringPairs(words: string[]): number {
  let count = 0;
  let reversed = words.map((word) => word.split("").reverse().join(""));
  for (let i = 0; i < words.length; i++)
    for (let j = i + 1; j < words.length; j++)
      if (words[i] === reversed[j]) count++;
  return count;
}
