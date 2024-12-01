function checkIfExist(arr: number[]): boolean {
  const seen = new Set();

  for (let num of arr) {
    if (seen.has(num * 2) || seen.has(num / 2)) return true;
    seen.add(num);
  }

  return false;
}

checkIfExist([10, 2, 5, 3]); // true
checkIfExist([7, 1, 14, 11]); // true
checkIfExist([-2, 0, 10, -19, 4, 6, -8]); // false
