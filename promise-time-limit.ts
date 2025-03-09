type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
  return async function (...args) {
    return new Promise((res, rej) => {
      fn(...args)
        .then((v) => res(v))
        .catch((e) => rej(e));
      setTimeout(() => rej("Time Limit Exceeded"), t);
    });
  };
}

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
