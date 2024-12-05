function canChange(start: string, target: string): boolean {
  let startPointer = 0;
  let targetPointer = 0;

  while (startPointer < start.length || targetPointer < target.length) {
    if (start[startPointer] === "_") {
      startPointer++;
      continue;
    }
    if (target[targetPointer] === "_") {
      targetPointer++;
      continue;
    }

    if (start[startPointer] !== target[targetPointer]) return false;

    if (start[startPointer] === "R" && startPointer > targetPointer)
      return false;
    if (start[startPointer] === "L" && startPointer < targetPointer)
      return false;

    startPointer++;
    targetPointer++;
  }
  return true;
}

canChange("_L__R__R_", "L______RR"); // true
canChange("R_L_", "__LR"); // false
canChange("L_", "_L"); // false
