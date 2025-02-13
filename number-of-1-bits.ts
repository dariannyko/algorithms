const hammingWeight = (n: number) => n.toString(2).replaceAll("0", "").length;

hammingWeight(2147483645);
