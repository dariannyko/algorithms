// 15
function totalFruit(fruits: number[]): number {
  let begin = 0;
  let windowState = new Map();
  let result = 0;

  for (let end = 0; end < fruits.length; end++) {
    windowState.set(fruits[end], (windowState.get(fruits[end]) || 0) + 1);

    while (windowState.size > 2) {
      const extraFruit = fruits[begin];
      const fruitCount = windowState.get(extraFruit) - 1;

      if (fruitCount === 0) {
        windowState.delete(extraFruit);
      } else {
        windowState.set(extraFruit, fruitCount);
      }
      begin++;
    }

    result = Math.max(result, end - begin + 1);
  }

  return result;
}

totalFruit([1, 2, 3, 2, 2]); // 4
