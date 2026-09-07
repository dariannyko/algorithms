function addStrings(num1: string, num2: string): string {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  let result = "";

  while (i >= 0 || j >= 0 || carry === 1) {
    if (i >= 0) carry += num1.charCodeAt(i--) - 48;
    if (j >= 0) carry += num2.charCodeAt(j--) - 48;
    result = (carry % 10) + result;
    carry = Math.floor(carry / 10);
  }

  return result;
}
