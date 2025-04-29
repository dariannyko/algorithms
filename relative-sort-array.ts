const relativeSortArray = (arr1: number[], arr2: number[]): number[] => {
  const sortMap = new Map();
  for (let i = 0; i < arr2.length; i++) sortMap.set(arr2[i], i);
  return arr1.sort(
    (a, b) =>
      (sortMap.get(a) ?? arr2.length + a) - (sortMap.get(b) ?? arr2.length + b)
  );
};
