function thousandSeparator(n: number): string {
  const reversed = n
    .toString()
    .split("")
    .reverse()
    .reduce<string[]>((prev, curr, index) => {
      if (!(index % 3) && index) return [...prev, ".", curr];
      return [...prev, curr];
    }, []);

  return reversed.reverse().join("");
}

thousandSeparator(234);
