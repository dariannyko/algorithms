function maxNumberOfBalloons(text: string, searchWord = "balloon"): number {
  const map = new Map();

  for (let char of text) {
    const value = char == "l" || char == "o" ? 0.5 : 1;
    map.set(char, (map.get(char) || 0) + value);
  }

  let min = Infinity;

  for (let char of searchWord) {
    min = Math.min(min, map.get(char) || 0);
  }

  return Math.floor(min);
}

// maxNumberOfBalloons("loonbalxballpoon"); // 2
maxNumberOfBalloons("balon"); // 0
// maxNumberOfBalloons("leetcode"); // 0
