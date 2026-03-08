const mirrorDistance = (n: number) =>
  Math.abs(n - +String(n).split("").reverse().join(""));
