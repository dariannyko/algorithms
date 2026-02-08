// https://leetcode.com/problems/reverse-letters-then-special-characters-in-a-string

function reverseByType(s: string): string {
  //console.log('z'.charCodeAt(0) - 97)
  // [0 , 25]
  let originalStringArr = s.split("");
  let stringArr: string[] = [];
  let specialArr: string[] = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    let charCode = char.charCodeAt(0) - 97;
    if (charCode >= 0 && charCode <= 25) {
      stringArr.push(char);
    } else {
      specialArr.push(char);
    }
  }

  let specialArrIdx = 0;
  let stringArrIdx = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    let char = s[i];

    let charCode = char.charCodeAt(0) - 97;
    if (charCode >= 0 && charCode <= 25) {
      originalStringArr[i] = stringArr[stringArrIdx];
      stringArrIdx++;
    } else {
      originalStringArr[i] = specialArr[specialArrIdx];
      specialArrIdx++;
    }
  }
  return originalStringArr.join("");
}
