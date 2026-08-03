function scoreValidator(events: string[]): number[] {
  let score = 0;
  let counter = 0;

  for (const event of events) {
    if (counter >= 10) {
      break;
    }

    if (event === "W") {
      counter++;
    } else if (event === "WD" || event === "NB") {
      score++;
    } else {
      score += parseInt(event);
    }
  }

  return [score, counter];
}
