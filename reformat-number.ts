function reformatNumber(number: string): string {
  const res: string[] = [];
  const str = number.replaceAll("-", "").replaceAll(" ", "");
  let i = 0;

  for (null; i < str.length - 4; i += 3) {
    console.log(i);

    res.push(str.slice(i, i + 3));
  }

  if (str.length - i === 4) {
    res.push(str.slice(i, i + 2), str.slice(i + 2, i + 4));
  } else {
    res.push(str.slice(i));
  }

  return res.join("-");
}

reformatNumber('"1-23-45 6"');
