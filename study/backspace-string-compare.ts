// #10
function backspaceCompare(s: string, t: string): boolean {
  let sPointer = s.length - 1;
  let tPointer = t.length - 1;

  while (sPointer >= 0 || tPointer >= 0) {
    while (sPointer >= 0) {
      let sSkip = 0;

      if (s[sPointer] === "#") {
        sSkip++;
      } else if (sSkip > 0) {
        sSkip--;
      } else {
        break;
      }
      sPointer--;
    }

    while (tPointer >= 0) {
      let tSkip = 0;

      if (t[tPointer] === "#") {
        tSkip++;
      } else if (tSkip > 0) {
        tSkip--;
      } else {
        break;
      }
      tPointer--;
    }

    if (s[sPointer] !== t[tPointer]) return false;

    sPointer--;
    tPointer--;
  }
  return sPointer === tPointer;
}

// backspaceCompare("ab##", "c#d#");
// backspaceCompare("a##c", "#a#c");
// backspaceCompare("ab#c", "ad#c");
