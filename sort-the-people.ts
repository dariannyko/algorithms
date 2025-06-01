function sortPeople(names: string[], heights: number[]): string[] {
  return names
    .map((name, i) => [heights[i], name] as [number, string])
    .sort((a, b) => b[0] - a[0])
    .map((pair) => pair[1]);
}
