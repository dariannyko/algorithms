function numRookCaptures(board: string[][]): number {
  const pawnsBeAttacked = (x: number, y: number): number => {
    let result = 0;
    let str = ["", ""];
    str[0] = board[x].join("").replaceAll(".", "");
    str[1] = "";
    for (let i = 0; i < 8; i++) {
      if (board[i][y] !== ".") str[1] += board[i][y];
    }
    for (let i = 0; i < str.length; i++) {
      if (str[i].includes("pR")) result++;
      if (str[i].includes("Rp")) result++;
    }
    return result;
  };
  let location = [0, 0];
  for (let i = 0; i < board.length; i++) {
    if (board[i].includes("R")) {
      location[0] = i;
      location[1] = board[i].indexOf("R");
      return pawnsBeAttacked(location[0], location[1]);
    }
  }
  return 0;
}

numRookCaptures([
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "p", ".", ".", ".", "."],
  [".", ".", ".", "R", ".", ".", ".", "p"],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "p", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
]); // 3
