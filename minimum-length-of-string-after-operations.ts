function minimumLength(s: string): number {
  const chars = new Array(26).fill(0);

  for (let char of s) {
    chars[char.charCodeAt(0) - 97]++;
  }

  let length = 0;
  for (let num of chars) {
    if (num) length += 2 - (num % 2);
  }

  return length;
}

minimumLength("abaacbcbb"); // 5
