function generateParenthesis(n: number): string[] {
  const result: string[] = [];

  function dfs(left: number, right: number, s: string): void {
    if (s.length === n * 2) {
      result.push(s);
      return;
    }

    if (left < n) {
      dfs(left + 1, right, s + "(");
    }

    if (right < left) {
      dfs(left, right + 1, s + ")");
    }
  }

  dfs(0, 0, "");

  return result;
}
