const countBits = (num: number) => {
  let count = 0;
  let n = num;

  while (n) {
    count += n & 1;
    n >>= 1;
  }

  return count;
};

function sortByBits(arr: number[]): number[] {
  return arr.sort((a: number, b: number) => {
    const countedBitsA = countBits(a);
    const countedBitsB = countBits(b);

    if (countedBitsA === countedBitsB) return a - b;

    return countedBitsA - countedBitsB;
  });
}
