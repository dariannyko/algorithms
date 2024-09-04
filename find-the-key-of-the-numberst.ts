function generateKey(num1: number, num2: number, num3: number): number {
  const nums = [num1, num2, num3];
  const maxLength = Math.max(...nums).toString().length;

  const res = new Array(maxLength).fill("9");

  for (const num of nums) {
    const chars = num.toString().padStart(maxLength, "0");

    for (let i = 0; i < chars.length; i++) {
      if (chars[i] < res[i]) res[i] = chars[i];
    }
  }

  return Number(res.join(""));
}

generateKey(987, 879, 798); // 777
generateKey(1, 10, 1000); // 0
