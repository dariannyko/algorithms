function getEncryptedString(s: string, k: number): string {
  const strLength = s.length;
  let res = "";

  for (let i = 0; i < strLength; i++) {
    res += s[(i + k) % strLength];
  }

  return res;
}

getEncryptedString("dart", 3); // tdar
