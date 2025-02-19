const BOX_SIZE = 81;

function isValidSudoku(board: string[][]): boolean {
  const set = new Set();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      const cell = board[i][j];

      if (cell === ".") continue;

      const row = `row ${i} value ${cell}`;
      const column = `column ${j} value ${cell}`;
      const boxNum = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      const box = `box ${boxNum} value ${cell}`;

      if (set.has(row) || set.has(column) || set.has(box)) return false;
      set.add(row).add(column).add(box);
    }
  }
  return true;
}

isValidSudoku([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]); //true
