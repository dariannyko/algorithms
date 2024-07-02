function countEven(num: number): number {
  let odd = 0;

  for (let i = 1; i <= num; i++) {
    const res = String(i)
      .split("")
      .reduce((sum, cur) => sum + +cur, 0);

    if (!(res % 2)) odd++;
    console.log(res);
  }

  return odd;
}

countEven(30); // 14
