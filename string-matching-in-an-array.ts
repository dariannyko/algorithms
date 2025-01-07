function stringMatching(words: string[]): string[] {
  return words.filter((word, index) =>
    words.some(
      (target, targetIndex) => target.includes(word) && index !== targetIndex
    )
  );
}

stringMatching(["mass", "as", "hero", "superhero"]); // ["as","hero"]
