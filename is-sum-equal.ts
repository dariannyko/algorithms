function getStringCode(string: string) {
  let code = "";
  const firstLetterCode = "a".charCodeAt(0);

  for (let i = 0; i < string.length; i++) {
    code += String(string[i].charCodeAt(0) - firstLetterCode);
  }

  return Number(code);
}

function isSumEqual(
  firstWord: string,
  secondWord: string,
  targetWord: string
): boolean {
  const num1 = getStringCode(firstWord);
  const num2 = getStringCode(secondWord);
  const target = getStringCode(targetWord);

  return num1 + num2 === target;
}

isSumEqual("acb", "cba", "cdb");
