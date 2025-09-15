// #1
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let leftChar = s[left];
    s[left] = s[right];
    s[right] = leftChar;

    left++;
    right--;
  }
}

reverseString(["h", "e", "l", "l", "o"]); // [ 'o', 'l', 'l', 'e', 'h' ]
