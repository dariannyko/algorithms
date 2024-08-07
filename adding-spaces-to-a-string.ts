function addSpaces(s: string, spaces: number[]): string {
  let res = "";
  let index = 0;

  for (let space of spaces) {
    res += s.slice(index, space);
    res += " ";
    index = space;
  }

  res += s.slice(index);

  return res;
}

addSpaces("LeetcodeHelpsMeLearn", [8, 13, 15]); // "Leetcode Helps Me Learn"
