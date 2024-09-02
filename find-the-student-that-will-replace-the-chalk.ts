function chalkReplacer(chalk: number[], k: number): number {
  const totalChalk = chalk.reduce((a, b) => a + b, 0);

  k = k % totalChalk;

  if (k === 0) return 0;

  for (let i = 0; i < chalk.length; i++) {
    if (k < chalk[i]) return i;
    k -= chalk[i];
  }
}

chalkReplacer([5, 1, 5], 22); // 0
