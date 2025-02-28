type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };

const argumentsLength = (...args: JSONValue[]): number => args.length;

argumentsLength(1, 2, 3); // 3
