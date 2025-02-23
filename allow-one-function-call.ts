type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined;

function once(fn: Function): OnceFn {
  let called = false;
  return function (...args) {
    if (!called) {
      called = true;
      return fn(...args);
    }

    return undefined;
  };
}

const f = (a, b, c) => a + b + c;
let onceFn = once(f);

console.log(onceFn(1, 2, 3)); // 6
onceFn(2, 3, 6); // returns undefined without calling fn
