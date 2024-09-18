const hash = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
  ["d", 4],
  ["e", 5],
  ["f", 6],
  ["g", 7],
  ["h", 8],
]);

const findColor = (cell: string) => {
  return (hash.get(cell[0])! + Number(cell[1])) % 2 === 0 ? "black" : "white";
};

const checkTwoChessboards = (
  coordinate1: string,
  coordinate2: string
): boolean => {
  return findColor(coordinate1) === findColor(coordinate2);
};
