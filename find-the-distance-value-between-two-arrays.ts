function findTheDistanceValue(
  arr1: number[],
  arr2: number[],
  d: number,
): number {
  let count: number = arr1.length;
  arr1.forEach((a1: number) => {
    arr2.some((a2: number) => {
      if (Math.abs(a1 - a2) <= d) {
        count--;
        return true;
      }
      return false;
    });
  });

  return count;
}

findTheDistanceValue([1, 4, 2, 3], [-4, -3, 6, 10, 20, 30], 3); // 2
