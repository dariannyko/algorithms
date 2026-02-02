function judgeCircle(moves: string): boolean {
  let x: number = 0,
    y: number = 0;
  const actions = {
    U: () => (y += 1),
    D: () => (y -= 1),
    R: () => (x += 1),
    L: () => (x -= 1),
  };

  for (let i = 0; i < moves.length; i++) {
    actions[moves[i]]();
  }

  return x == 0 && y == 0;
}
