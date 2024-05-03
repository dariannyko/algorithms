const isStrictlyPalindromic = function (n) {
  let res = false;

  for (let i = 2; i <= n - 2; i++) {
    const num = n.toString(i).split("");

    if (num.length % 2) {
      return false;
    }

    for (let i = 0; i < num.length; i++) {
      if (num[i] === num.pop()) {
        res = true;
      } else {
        return false;
      }
    }
  }

  return res;
};
