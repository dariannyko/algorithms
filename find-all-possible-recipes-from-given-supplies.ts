function findAllRecipes(
  recipes: string[],
  ingredients: string[][],
  supplies: string[]
): string[] {
  const suppliesSet = new Set(supplies);

  const res: string[] = [];

  for (let i = 0; i < recipes.length; i++) {
    const canCook = ingredients[i].every((ingredient) =>
      suppliesSet.has(ingredient)
    );

    if (canCook) {
      res.push(recipes[i]);
      suppliesSet.add(recipes[i]);
    }
  }

  console.log(suppliesSet);
  console.log(res);

  return res;
}

findAllRecipes(
  ["bread", "sandwich", "burger"],
  [
    ["yeast", "flour"],
    ["bread", "meat"],
    ["sandwich", "meat", "bread"],
  ],
  ["yeast", "flour", "meat"]
);

// findAllRecipes(
//   ["bread", "sandwich"],
//   [
//     ["yeast", "flour"],
//     ["bread", "meat"],
//   ],
//   ["yeast", "flour", "meat"]
// );
