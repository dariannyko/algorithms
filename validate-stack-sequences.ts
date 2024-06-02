function validateStackSequences(pushed: number[], popped: number[]): boolean {
  if (pushed.length !== popped.length) return false;

  const stack: number[] = [];
  let poppedInd = 0;

  for (let i = 0; i < pushed.length; i++) {
    stack.push(pushed[i]);

    while (stack.length && popped[poppedInd] === stack.at(-1)) {
      stack.pop();
      poppedInd += 1;
    }
  }

  return !stack.length;
}

validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]); //
