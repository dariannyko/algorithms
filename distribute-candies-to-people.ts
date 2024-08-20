function distributeCandies(candies: number, num_people: number): number[] {
  const res = new Array(num_people).fill(0);

  let candies_rest = 1;

  while (candies >= 0) {
    const index = (candies_rest - 1) % num_people;
    res[index] += Math.min(candies_rest, candies);
    candies -= candies_rest;
    candies_rest++;
  }

  return res;
}

distributeCandies(10, 3); // [5,2,3]
