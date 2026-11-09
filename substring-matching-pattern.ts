function hasMatch(s: string, p: string): boolean {
  const [p1, p2] = p.split("*");

  if (p1 === "") {
    return s.includes(p2);
  } else if (p2 === "") {
    return s.includes(p1);
  } else {
    const indexOfP1 = s.indexOf(p1);
    if (indexOfP1 === -1) return false;
    return s.substring(indexOfP1 + p1.length).includes(p2);
  }

  return true;
}
