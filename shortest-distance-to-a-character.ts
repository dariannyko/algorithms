function shortestToChar(s: string, c: string): number[] {
  let strArr = s.split("");
  let distArr = [];

  let count = s.length;

  strArr.forEach((el, index) => {
    if (el === c) {
      count = 0;
    }
    distArr[index] = count;
    count++;
  });

  strArr.reverse();
  count = s.length;

  strArr.forEach((el, index) => {
    if (el === c) {
      count = 0;
    }
    if (distArr[s.length - index - 1] > count) {
      distArr[s.length - index - 1] = count;
    }
    count++;
  });

  return distArr;
}
