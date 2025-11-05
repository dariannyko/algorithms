function minOperations(logs: string[]): number {
  let level = 0;

  for (const log of logs) {
    if (log === "./") continue;
    if (log === "../") {
      if (level !== 0) level--;
    } else {
      level++;
    }
  }

  return level;
}

minOperations(["d1/", "d2/", "../", "d21/", "./"]); // 2
