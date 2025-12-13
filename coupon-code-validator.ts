const businessLineOrder = {
  electronics: 1,
  grocery: 2,
  pharmacy: 3,
  restaurant: 4,
};

function validateCoupons(
  code: string[],
  businessLine: string[],
  isActive: boolean[]
): string[] {
  const validCoupons = code
    .map((c, index) => ({
      code: c,
      businessLine: businessLineOrder[businessLine[index]],
      isActive: isActive[index],
    }))
    .filter(
      (combo) =>
        combo.code.length > 0 &&
        /^[A-Za-z0-9_]+$/.test(combo.code) &&
        combo.businessLine &&
        combo.isActive
    )
    .sort((a, b) => {
      if (a.businessLine === b.businessLine) {
        return a.code <= b.code ? -1 : 1;
      } else return a.businessLine - b.businessLine;
    })
    .map((c) => c.code);

  return validCoupons;
}
