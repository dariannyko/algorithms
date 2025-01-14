function findThePrefixCommonArray(A: number[], B: number[]): number[] {
  const set = new Set();

  let counter = 0;
  const res: number[] = [];

  for (let i = 0; i < A.length; i++) {
    if (A[i] === B[i]) counter++;
    if (set.has(A[i])) counter++;
    if (set.has(B[i])) counter++;

    set.add(A[i]);
    set.add(B[i]);

    res.push(counter);
  }

  return res;
}

findThePrefixCommonArray([1, 3, 2, 4], [3, 1, 2, 4]); // [0,2,3,4]
findThePrefixCommonArray([2, 3, 1], [3, 1, 2]); // [0,1,3]
