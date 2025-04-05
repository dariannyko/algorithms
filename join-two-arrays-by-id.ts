type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type ArrayType = { id: number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
  const hash = {};
  const arr = arr1.concat(arr2);

  for (let elem of arr) {
    if (hash[elem.id]) {
      hash[elem.id] = Object.assign(hash[elem.id], elem);
    } else {
      hash[elem.id] = elem;
    }
  }
  return Object.values(hash);
}

join(
  [
    { id: 1, x: 2, y: 3 },
    { id: 2, x: 3, y: 6 },
  ],
  [
    { id: 2, x: 10, y: 20 },
    { id: 3, x: 0, y: 0 },
  ]
);
