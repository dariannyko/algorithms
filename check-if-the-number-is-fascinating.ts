const str = "123456789";

function isFascinating(n: number): boolean {
  const res = `${n}${n * 2}${n * 3}`;

  const sorted = res.split("").sort().join("");

  return str == sorted;
}

isFascinating(192); // true
