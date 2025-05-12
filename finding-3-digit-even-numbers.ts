// TODO
function findEvenNumbers(digits: number[]): number[] {
  const histo = Array(10).fill(0);
  for (const digit of digits) {
    histo[digit] += 1;
  }

  const result = [];
  for (let i = 100; i < 1000; i += 2) {
    const vals = [i % 10, Math.floor(i / 10) % 10, Math.floor(i / 100) % 10];

    let ok = true;
    for (const val of vals) {
      if (!histo[val]) {
        ok = false;
      }
      histo[val]--;
    }

    for (const val of vals) {
      histo[val]++;
    }
    if (ok) {
      result.push(i);
    }
  }

  return result;
}
