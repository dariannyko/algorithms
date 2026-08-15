// function maximumLengthSubstring(s: string): number {
//   const map = {};

//   for (let i = 0; i < s.length; i++) {
//     if (map[s[i]] == 2) {
//       const t = s.slice(0, i + 1);
//       console.log(t);
//     }
//     map[s[i]] = (map[s[i]] || 0) + 1;
//   }
//   console.log(map);
// }

// // maximumLengthSubstring("bcbbbcba");
// maximumLengthSubstring("aaaa");

function maximumLengthSubstring(s: string): number {
  const count: number[] = new Array(26).fill(0);
  let left: number = 0;
  let res: number = 0;

  for (let right = 0; right < s.length; right++) {
    const ch: number = s.charCodeAt(right) - 97;
    count[ch]++;

    while (count[ch] > 2) {
      const ch2: number = s.charCodeAt(left) - 97;
      count[ch2]--;
      left++;
    }

    res = Math.max(res, right - left + 1);
  }
  return res;
}
