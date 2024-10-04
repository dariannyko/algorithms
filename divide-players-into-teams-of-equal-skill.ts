function dividePlayers(skill: number[]): number {
  skill.sort((a, b) => a - b);
  let res = 0;
  const min = skill[0] + skill.at(-1);

  for (let i = 0; i < skill.length / 2; i++) {
    const sum = skill[i] + skill.at(-1 - i);

    if (sum != min) return -1;

    res += skill[i] * skill.at(-1 - i);
  }
  return res;
}

dividePlayers([3, 2, 5, 1, 3, 4]); // 22
