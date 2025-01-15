function minRemoveToMakeValid(s: string): string {
  const stack: number[] = [];
  const invalid: number[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      stack.push(i);
    } else if (s[i] == ")") {
      if (stack.length) {
        stack.pop();
      } else {
        invalid.push(i);
      }
    }
  }

  const set = new Set(stack.concat(invalid));

  let res = "";

  for (let i = 0; i < s.length; i++) {
    if (!set.has(i)) res += s[i];
  }
  return res;
}

minRemoveToMakeValid("lee(t(c)o)de)");
minRemoveToMakeValid("))((");
minRemoveToMakeValid("a)b(c)d");
// function convert(s: string, numRows: number): string {
//   if (numRows === 1) return s;
//   const rows = Array(numRows).fill("");
//   let dir = 1,
//     i = 0;
//   for (const c of s) {
//     rows[i] += c;
//     console.log(i);
//     console.log(dir);
    
//     i += dir;
    
//     if (i === numRows - 1) dir = -1;
//     else if (i === 0) dir = 1;
//   }
//   return rows.reduce((acc, val) => acc + val, "");
// }