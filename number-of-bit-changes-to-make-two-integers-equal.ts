function minChanges(n: number, k: number): number {
  if (n === k) return 0;
  const binaryN = n.toString(2);
  const binaryK = k.toString(2).padStart(binaryN.length, "0");

  let res = "";
  let step = 0;

  for (let i = 0; i < binaryN.length; i++) {
    if (binaryN[i] === "1" && binaryN[i] !== binaryK[i]) {
      res += 0;
      step++;
    } else {
      res += binaryN[i];
    }
  }

  return res === binaryK ? step : -1;
}

minChanges(13, 4); // -1
