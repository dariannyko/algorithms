function lemonadeChange(bills: number[]): boolean {
  let change = {
    5: 0,
    10: 0,
  };

  const changeCalculator = {
    5: () => (change[5] += 1),
    10: () => {
      if (change[5] > 0) {
        change[5] -= 1;
        change[10] += 1;
      } else {
        return false;
      }
    },
    20: () => {
      if (change[5] > 0 && change[10] > 0) {
        change[5] -= 1;
        change[10] -= 1;
      } else if (change[5] >= 3) {
        change[5] -= 3;
      } else {
        return false;
      }
    },
  };

  for (let bill of bills) {
    if (changeCalculator[bill]() === false) return false;
  }

  return true;
}

lemonadeChange([5, 5, 10, 10, 20]); // false
lemonadeChange([5, 5, 5, 10, 20]); // true
