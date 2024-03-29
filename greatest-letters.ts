function greatestLetter(s: string): string {
  let maxLetter = "";

  const set = new Set(s);

  for (let i = 0; i < s.length; i++) {
    const greatestLetter =
      !maxLetter ||
      s[i].toLocaleUpperCase().charCodeAt(0) > maxLetter.charCodeAt(0);

    if (
      set.has(s[i].toLocaleLowerCase()) &&
      set.has(s[i].toUpperCase()) &&
      greatestLetter
    ) {
      maxLetter = s[i].toLocaleUpperCase();
    }
  }
  console.log(maxLetter);

  return maxLetter;
}

greatestLetter("arRAzFif");
// greatestLetter("lEeTcOdE");
