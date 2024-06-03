function buildArray(target: number[], n: number): string[] {
  const stack: string[] = [];
  let index = 0;

  for (let i = 1; i <= n && index < target.length; i++) {
    if (target[index] === i) {
      stack.push("Push");
      index++;
    } else {
      stack.push("Push", "Pop");
    }
  }

  return stack;
}

buildArray([1, 3], 3); // ["Push","Push","Pop","Push"]
