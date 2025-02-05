function areAlmostEqual(s1: string, s2: string): boolean {
  if (s1 === s2) return true;

  const ind: number[] = [];
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) ind.push(i);

    if (ind.length > 2) return false;
  }

  if (ind.length === 2) {
    const [i, j] = ind;
    return s1[i] === s2[j] && s1[j] === s2[i];
  }

  return false;
}

areAlmostEqual("caa", "aaz");
// areAlmostEqual("bank", "kanb");
