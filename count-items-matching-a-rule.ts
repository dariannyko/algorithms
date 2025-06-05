const SEARCH_CRITERIA = {
    "type": 0,
    "color": 1,
    "name": 2
};

function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
  const criteriaIndex = SEARCH_CRITERIA[ruleKey];
  const foundItems = items.filter((item) => item[criteriaIndex] === ruleValue);
  return foundItems?.length;
};