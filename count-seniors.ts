function countSeniors(details: string[]): number {
  return details.filter((str) => Number(str.slice(11, 13)) > 60).length;
}

countSeniors(["7868190130M7522", "5303914400F9211", "9273338290F4010"]); // 2
