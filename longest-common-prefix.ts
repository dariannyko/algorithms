// TODO: refactor
function longestCommonPrefix(strs: string[]): string {
  const sortedStrs = strs.sort((a, b) => a.length - b.length);
  console.log(sortedStrs);

  let prefix = strs[0];
  let currIndex = 0;

  while (currIndex < sortedStrs.length) {
    const isContainPrefix = sortedStrs[currIndex].startsWith(prefix);
    console.log(isContainPrefix, sortedStrs[currIndex]);

    if (isContainPrefix) {
      currIndex++;
    } else {
      console.log(prefix);

      prefix = prefix.slice(0, prefix.length - 1);
    }
  }

  return prefix;
}

longestCommonPrefix(["flower", "flow", "flight"]);
