function kthDistinct(arr: string[], k: number): string {
  const map = {};
  const uniqueValues: string[] = [];

  arr.forEach((item) => {
    map[item] = (map[item] || 0) + 1;
  });

  for (let key in map) {
    if (map[key] == 1) uniqueValues.push(key);
  }

  return uniqueValues[k - 1] || "";
}

kthDistinct(["d", "b", "c", "b", "c", "a"], 2);
kthDistinct(["aaa", "aa", "a"], 1);
