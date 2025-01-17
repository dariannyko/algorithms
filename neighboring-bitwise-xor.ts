function doesValidArrayExist(derived: number[]): boolean {
  return !derived.reduce((prev, curr) => prev ^ curr, 0);
}

doesValidArrayExist([1, 1, 0]);
