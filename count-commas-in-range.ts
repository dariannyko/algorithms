function countCommas(n: number): number {
  let totalCommas: number = 0;
  let threshold: number = 1000;

  while (n >= threshold) {
    totalCommas += n - threshold + 1;
    threshold *= 1000;
  }

  return totalCommas;
}
