type Fn = (...params: number[]) => number;

function memoize(fn: Fn): Fn {
  const cache: Map<string, number> = new Map();

  const memoizedFn: Fn = function (...args) {
    const key: string = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }

    const res: number = fn(...args);
    cache.set(key, res);
    return res;
  };

  return memoizedFn;
}
