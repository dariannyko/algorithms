function haveConflict(event1: string[], event2: string[]): boolean {
  return event2[0] <= event1[1] && event2[1] >= event1[0];
}

haveConflict(["01:15", "02:00"], ["02:00", "03:00"]); // true
haveConflict(["16:53", "19:00"], ["10:33", "18:15"]); // true
