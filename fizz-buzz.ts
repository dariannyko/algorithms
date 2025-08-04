function fizzBuzz(n: number): string[] {
  let zzList: string[] = Array(n);

  for (let i = 1; i <= n; i++) {
    let temp = "";
    if (i % 3 == 0) temp = "Fizz";
    if (i % 5 == 0) temp += "Buzz";
    zzList[i - 1] = temp === "" ? i.toString() : temp;
  }

  return zzList;
}
