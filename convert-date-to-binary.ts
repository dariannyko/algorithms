function convertDateToBinary(date: string): string {
  return date
    .split("-")
    .map((item) => parseInt(item).toString(2))
    .join("-");
}

convertDateToBinary("2080-02-29"); // "100000100000-10-11101"
