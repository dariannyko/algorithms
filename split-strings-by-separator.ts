function splitWordsBySeparator(words: string[], separator: string): string[] {
    return words.join(separator).split(separator).filter((word) => word);
};