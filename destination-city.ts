function destCity(paths: string[][]): string {
  let map = new Map();
  for (let i = 0; i < paths.length; i++) {
    map.set(paths[i][0], paths[i][1]);
  }
  for (const value of map.values()) {
    if (!map.has(value)) return value;
  }
}
