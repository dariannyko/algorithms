function nextGreatestLetter(letters: string[], target: string): string {
  let start = 0;
  let end = letters.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (letters[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return letters[start] || letters[0];
}

nextGreatestLetter(["c", "f", "j"], "a"); // "c"
nextGreatestLetter(["x", "x", "y", "y"], "z"); // "x"
