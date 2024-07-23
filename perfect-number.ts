function checkPerfectNumber(num: number): boolean {
  let sum = 0;
  const half = num / 2;

  for (let i = 1; i < half; i++) {
    if (num % i == 0) sum += i;
  }

  return sum == half;
}

checkPerfectNumber(2); // false
checkPerfectNumber(28); // true
