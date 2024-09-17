function stableMountains(height: number[], threshold: number): number[] {
  const res: number[] = [];
  for (let i = 1; i < height.length; i++) {
    if (height[i - 1] > threshold) res.push(i);
  }

  return res;
}

stableMountains([1, 2, 3, 4, 5], 2); // [3, 4]
