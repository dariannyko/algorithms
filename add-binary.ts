const addBinary = (a: string, b: string) =>
  (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);

addBinary("11", "1");
