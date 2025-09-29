// #10
function backspaceCompare(s: string, t: string): boolean {
  let sPointer = s.length - 1;
  let tPointer = t.length - 1;

  let sSkip = 0;
  let tSkip = 0;

  while (sPointer >= 0 && tPointer >= 0) {
    if (s[sPointer] === "#") sSkip++;
    if (t[tPointer] === "#") tSkip++;

    console.log(sSkip);
    if (s[sPointer] !== "#" && sSkip > 0) {
      sPointer -= 1;
      sSkip--;
    }
    console.log(tSkip);
    if (t[tPointer] !== "#" && tSkip > 0) {
      tPointer -= 1;
      tSkip--;
    }

    // if (
    //   s[sPointer] !== "#" &&
    //   t[tPointer] !== "#" &&
    //   s[sPointer] !== t[tPointer]
    // )
    //   return false;
    console.log(t[tPointer]);
    console.log(s[sPointer]);

    sPointer--;
    tPointer--;
    console.log(sPointer);
  }

  console.log(sPointer);
  console.log(tPointer);
}
                    
backspaceCompare("ab##", "c#d#");
