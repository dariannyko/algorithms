function digitSum(s: string, k: number): string {
  if (s.length <= k) return s;

  const groups: string[] = [];

  for (let i = 0; i < s.length; i += k) {
    groups.push(s.slice(i, k + i));
  }

  const sum: number[] = groups.map((item) =>
    item.split("").reduce((sum, cur) => sum + +cur, 0),
  );

  const res = sum.reduce((str, cur) => (str += String(cur)), "");

  return digitSum(res, k);
}
