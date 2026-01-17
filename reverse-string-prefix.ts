function reversePrefix(s: string, k: number): string {
  let arr = s.split("");

  for (let i = 0; i < Math.floor(k / 2); i++) {
    let left = arr[i];
    let right = arr[k - 1 - i];
    arr[i] = right;
    arr[k - 1 - i] = left;
  }

  return arr.join("");
}
