function canBeEqual(s1: string, s2: string) {
  const str1 = s1.split("");
  for (let i = 0; i < 2; i++) {
    if (str1[i] !== s2[i]) [str1[i], str1[i + 2]] = [str1[i + 2], str1[i]];
  }

  return str1.join("") === s2;
}

canBeEqual("abcd", "cdab");
