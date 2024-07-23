function checkPerfectNumber(num: number): boolean {
  let divisor = 1;
  const half = Math.floor(num / 2);

  for (let i = 2; i < half; i++) {
    if (num % i == 0) divisor += i;
  }
  console.log(divisor + half == num);
  console.log(divisor, half);

  return divisor + half == num;
}

checkPerfectNumber(2);
