function replaceElements(arr: number[]) {
  const res = new Array<number>(arr.length);
  for (let i = arr.length - 1, max = -1; i >= 0; i--) {
    (res[i] = max), (max = Math.max(max, arr[i]));
  }
  return res;
}
