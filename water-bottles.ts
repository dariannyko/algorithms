function numWaterBottles(numBottles: number, numExchange: number): number {
  let drink = numBottles;

  while (numBottles >= numExchange) {
    const newBottles = Math.floor(numBottles / numExchange);
    drink += newBottles;

    numBottles = numBottles - numExchange * newBottles + newBottles;
  }

  return drink;
}

numWaterBottles(15, 4); // 19
numWaterBottles(9, 3); // 13
