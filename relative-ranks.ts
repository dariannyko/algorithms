function findRelativeRanks(scores: number[]): string[] {
  const ranking: string[] = new Array(scores.length);
  scores
    .map((score, index) => ({ score, index }))
    .sort((a, b) => b.score - a.score)
    .forEach((rank, index) => {
      if (index < 3) {
        if (index == 0) {
          ranking[rank.index] = "Gold Medal";
        } else if (index == 1) {
          ranking[rank.index] = "Silver Medal";
        } else {
          ranking[rank.index] = "Bronze Medal";
        }
      } else {
        ranking[rank.index] = (index + 1).toString();
      }
    });
  return ranking;
}
