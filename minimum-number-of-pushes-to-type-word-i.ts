const AVAILABLE_KEYS: number = 8;

function minimumPushes(word: string): number {
  let n: number = word.length;
  let cost: number = 1;
  let result: number = 0;

  while (n > 0) {
    result += Math.min(n, AVAILABLE_KEYS) * cost;
    cost++;
    n -= AVAILABLE_KEYS;
  }

  return result;
}
