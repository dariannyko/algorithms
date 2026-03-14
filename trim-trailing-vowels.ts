function trimTrailingVowels(s: string): string {
  let vowels = ["a", "e", "i", "o", "u"];
  let arr = [...s];
  let len = s.length - 1;

  while (len >= 0) {
    if (!vowels.includes(arr[len])) {
      break;
    }
    arr.pop();
    len--;
  }

  return arr.join("");
}

trimTrailingVowels('"idea"'); // "id"
