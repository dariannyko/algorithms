// TODO: refactor
function groupAnagrams(strs: string[]): string[][] {
  var sMap = new Map();
  for (var i = 0; i < strs.length; i++) {
    var a1 = strs[i].split("").sort().join("");
    var v = sMap.get(a1);
    if (v) {
      v.push(strs[i]);
      sMap.set(a1, v);
    } else {
      sMap.set(a1, [strs[i]]);
    }
  }

  return [...sMap.values()];
}
