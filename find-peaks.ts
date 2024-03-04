function findPeaks(mountain: number[]) {
  const res: number[] = [];

  for (let i = 1; i < mountain.length - 1; i++) {
    if (mountain[i] > mountain[i + 1] && mountain[i] > mountain[i - 1])
      res.push(i);
  }

  return res;
}

findPeaks([2, 4, 4]);
findPeaks([1,4,3,8,5]);
