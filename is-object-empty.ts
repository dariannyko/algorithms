type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[];

const isEmpty = (obj: Obj): boolean => Object.keys(obj).length === 0;

isEmpty({ x: 5, y: 42 });
