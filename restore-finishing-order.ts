function recoverOrder(order: number[], friends: number[]) {
  const set = new Set(friends);
  return order.filter((val) => set.has(val));
}
