function cellsInRange(s: string): string[] {
  let col0 = s.charCodeAt(0);
  let row0 = parseInt(s[1]);
  let col1 = s.charCodeAt(3);
  let row1 = parseInt(s[4]);

  const cells: string[] = [];
  for (let col = col0; col <= col1; ++col) {
    const c = String.fromCharCode(col);
    for (let row = row0; row <= row1; ++row) {
      cells.push(c + row.toString());
    }
  }

  return cells;
}
