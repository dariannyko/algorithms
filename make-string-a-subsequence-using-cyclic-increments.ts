const lastCharCode = "z".charCodeAt(0);
const firstCharCode = "a".charCodeAt(0);

function canMakeSubsequence(str1: string, str2: string): boolean {
  let j = 0;

  for (let i = 0; i < str1.length && j < str2.length; i++) {
    const code = str1[i].charCodeAt(0);
    const nextChar = String.fromCharCode(
      code == lastCharCode ? firstCharCode : code + 1
    );

    if (str1[i] === str2[j] || nextChar === str2[j]) j++;
  }

  return j == str2.length;
}

canMakeSubsequence("abc", "ad"); // true
canMakeSubsequence("zc", "ad"); // true
