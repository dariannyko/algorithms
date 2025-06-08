function lexicalOrder(n: number): number[] {
  const arr: number[] = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  return arr.sort();
}

lexicalOrder(13); // [1,10,11,12,13,2,3,4,5,6,7,8,9]
