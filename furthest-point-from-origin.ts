function furthestDistanceFromOrigin(moves: string): number {
  let r = 0;
  let l = 0;

  for (let move of moves) {
    if (move === "R") r++;
    if (move === "L") l++;
  }

  const sign = r > l ? 1 : -1;

  let res = 0;

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === "L") res += -1;
    if (moves[i] === "R") res += 1;
    if (moves[i] === "_") res += sign;
  }

  return Math.abs(res);
}

furthestDistanceFromOrigin("L_RL__R"); // 3
