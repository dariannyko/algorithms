function flipAndInvertImage(image: number[][]) {
  image.map((item) => {
    const reversed: number[] = [];
    let last = item.length - 1;

    for (let i = 0; i < item.length; i++) {
      const curValue = item[last];
      reversed.push(Number(!curValue));
      last--;
    }

    return reversed;
  });
}

flipAndInvertImage([
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
]);
