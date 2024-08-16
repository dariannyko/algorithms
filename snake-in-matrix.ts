function finalPositionOfSnake(n: number, commands: string[]): number {
  let x, y;
  x = y = 0;

  for (const comm of commands) {
    switch (comm) {
      case "UP":
        x -= 1;
        break;
      case "DOWN":
        x += 1;
        break;
      case "LEFT":
        y -= 1;
        break;
      case "RIGHT":
        y += 1;
        break;
    }
  }

  return x * n + y;
}
