function digitCount(num: string): boolean {
  const map = new Map();
  for (let i = 0; i < num.length; i++) {
    map.set(num[i], (map.get(num[i]) || 0) + 1);
  }

  for (let j = 0; j < num.length; j++) {
    const value = map.get(j.toString()) || 0;

    if (Number(num[j]) !== value) return false;
  }

  return true;
}

digitCount("1210"); // true
