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
