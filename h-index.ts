function hIndex(citations: number[]): number {
  citations.sort((a, b) => b - a);

  return citations.filter((item, index) => item > index).length;
}

console.log(hIndex([3, 0, 6, 1, 5])); // 3
console.log(hIndex([0, 1])); // 1
