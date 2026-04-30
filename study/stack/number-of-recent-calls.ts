class RecentCounter {
  queue: number[];
  constructor() {
    this.queue = [];
  }

  ping(t: number): number {
    this.queue.push(t);
    const window = t - 3000;

    while (this.queue.length && this.queue[0] < window) {
      this.queue.shift();
    }

    return this.queue.length;
  }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * const obj = new RecentCounter()
 * const param_1 = obj.ping(t)
 */
