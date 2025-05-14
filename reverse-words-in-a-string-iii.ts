function reverseWords(s: string): string {
  return s
    .split(" ")
    .map((n) => n.split("").reverse().join(""))
    .join(" ");
}
