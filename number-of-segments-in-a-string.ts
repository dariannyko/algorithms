function countSegments(s: string): number {
  let count = 0;
  let inSegment = false;

  for (const char of s) {
    if (char !== " ") {
      if (!inSegment) {
        count++;
        inSegment = true;
      }
    } else {
      inSegment = false;
    }
  }

  return count;
}
