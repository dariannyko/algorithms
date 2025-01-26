function compress(chars: string[]): number {
  let index = 0;

  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    let count = 0;

    while (i < chars.length && char === chars[i]) {
      count++;
      i++;
    }

    if (count === 1) {
      chars[index] = char;
      index++;
    } else {
      chars[index] = char;
      index++;

      for (let digit of count.toString()) {
        chars[index] = digit;
        index++;
      }
    }
    i--;
  }
  chars.length = index;
  return index;
}

compress(["a", "a", "b", "b", "c", "c", "c"]); // 6
