function findRestaurant(list1: string[], list2: string[]): string[] {
  const map = new Map();
  const map2 = new Map();

  for (let i = 0; i < list1.length; i++) {
    map.set(list1[i], i);
  }

  for (let j = 0; j < list2.length; j++) {
    if (map.has(list2[j])) {
      const index = map.get(list2[j]) + j;
      map2.set(index, [...(map2.get(index) || []), list2[j]]);
    }
  }
  const min = Math.min(...Array.from(map2.keys()));

  return map2.get(min);
}

findRestaurant(
  ["Shogun", "Tapioca Express", "Burger King", "KFC"],
  ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
); // ["Shogun"]
findRestaurant(["happy", "sad", "good"], ["sad", "happy", "good"]); // ["happy, "sad]
