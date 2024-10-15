// TODO:
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const mostCandies = Math.max(...candies);
  return candies.map(
    (candyAmount) => candyAmount + extraCandies >= mostCandies
  );
}
