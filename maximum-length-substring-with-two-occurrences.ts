function maximumLengthSubstring(s: string): number {
  const map = {};

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] == 2) {
      const t = s.slice(0, i + 1);
      console.log(t);
    }
    map[s[i]] = (map[s[i]] || 0) + 1;
  }
  console.log(map);
}

// maximumLengthSubstring("bcbbbcba");
maximumLengthSubstring("aaaa");
