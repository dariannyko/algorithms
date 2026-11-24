function largestOddNumber(num: string): string {
  for (let i = num.length - 1; i >= 0; i--)
    if (num.codePointAt(i) % 2) return num.slice(0, i + 1);
  return "";
}

largestOddNumber("52"); // "5maximum-subarray-with-equal-products"
