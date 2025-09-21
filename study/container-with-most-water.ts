// #6
function maxArea(height: number[]): number {
  let res = 0;

  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const leftWall = height[left];
    const rightWall = height[right];
    const width = right - left;

    const area = width * Math.min(leftWall, rightWall);
    res = Math.max(res, area);

    leftWall < rightWall ? left++ : right--;
  }

  return res;
}

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]); // 49
