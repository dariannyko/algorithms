const accountBalanceAfterPurchase = (purchaseAmount: number): number =>
  100 - Math.round(purchaseAmount / 10) * 10;

accountBalanceAfterPurchase(9); // 90
