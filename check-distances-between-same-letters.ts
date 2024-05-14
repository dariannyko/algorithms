function checkDistances(s: string, distance: number[]): boolean {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    const dist = i - (map.get(s[i]) || 0);

    map.set(s[i], dist);
  }

  for (let lettersDist of map) {
    const dist = lettersDist[1] - 1; // distance between two letters
    const key = lettersDist[0];
    const pos = key.charCodeAt(0) - 97; // letter position in alphabet

    if (dist !== distance[pos]) return false;
  }

  return true;
}
checkDistances(
  "abaccb",
  [1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
); // true
