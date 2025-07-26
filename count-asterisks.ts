var countAsterisks = function(s) {
  let count = 0;
  let flag = true;
  for (const char of s) {
    if (flag && char === "*") count++;
    if (char === "|") flag = !flag;
  }
  return count;
};