function backspaceCompare(s: string, t: string): boolean {
  function formatString(str: string) {
    let res: string[] = [];

    for (let s of str) {
      if (s === "#") {
        res.pop();
      } else {
        res.push(s);
      }
    }

    return res.join("");
  }

  return formatString(s) === formatString(t);
}

backspaceCompare("ab#c", "ad#c"); // true
