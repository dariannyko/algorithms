function smallestNumber(n: number): number {
  const binariNumber = n.toString(2);
  const binaryLength = binariNumber.length;
  let setBit = "";
  for (let i = 0; i < binaryLength; i++) {
    setBit += "1";
  }
  return parseInt(setBit, 2);
}

smallestNumber(5); // 7
