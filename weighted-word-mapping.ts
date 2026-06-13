const mapWordWeights = (words: string[], weights: number[]) =>
  words
    .map((w) =>
      String.fromCharCode(
        122 -
          (w.split("").reduce((r, c) => r + weights[c.charCodeAt(0) - 97], 0) %
            26),
      ),
    )
    .join("");

mapWordWeights(
  ["abcd"],
  [
    7, 5, 3, 4, 3, 5, 4, 9, 4, 2, 2, 7, 10, 2, 5, 10, 6, 1, 2, 2, 4, 1, 3, 4, 4,
    5,
  ],
);
