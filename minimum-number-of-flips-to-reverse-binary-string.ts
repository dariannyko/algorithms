function minimumFlips(n: number): number {
  const str = n.toString(2);

  let res = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - i - 1]) res++;
  }

  return res;
}
