function longestCommonPrefix(strs: string[]): string {
  let prefix = strs[0];
  let index = 0;

  while (index < strs.length) {
    const containPrefix = strs[index].startsWith(prefix);

    if (containPrefix) {
      index++;
    } else {
      prefix = prefix.slice(0, prefix.length - 1);
    }
  }

  return prefix;
}

longestCommonPrefix(["flower", "flow", "flight"]); // '"fl"
