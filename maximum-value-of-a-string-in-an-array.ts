function maximumValue(strs: string[]): number {
  let max = -Infinity;
  for (const str of strs) {
    const includeStr = str.match(/[^\d]+/g);
    let curVal = 0;
    if (includeStr) {
      curVal = str.length;
    } else {
      curVal = Number(str);
    }
    max = Math.max(max, curVal);
  }
  return max;
}
