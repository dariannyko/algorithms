function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;

  const rows = new Array(numRows).fill("");

  let direction = 1;
  let ind = 0;

  for (let char of s) {
    rows[ind] += char;
    ind += direction;

    if (ind === numRows - 1) direction = -1;
    if (ind === 0) direction = 1;
  }

  return rows.reduce((prev, curr) => prev + curr, "");
}

convert("AB", 1); // "AB"
convert("PAYPALISHIRING", 3); // "PAHNAPLSIIGYIR"
