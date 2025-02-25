function numOfSubarrays(arr: number[]): number {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(i, j);
    }
  }
}

numOfSubarrays([1, 3, 5]);
