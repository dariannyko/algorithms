// TODO: refactor
function sortString(str: string) {
  return str.split("").sort().join("");
}

function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (let str of strs) {
    const sortedStr = sortString(str);

    const foundKey = map.get(sortedStr);

    if (foundKey) {
      foundKey.push(str);
      map.set(sortedStr, foundKey);
      continue;
    }

    map.set(sortedStr, [str]);
  }

  return Array.from(map.values());
}
