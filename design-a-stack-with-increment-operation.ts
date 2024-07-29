class CustomStack {
  stack: number[];
  constructor(private maxSize: number) {
    this.stack = [];
  }

  push(x: number): void {
    if (this.stack.length < this.maxSize) {
      this.stack.push(x);
    }
  }

  pop(): number {
    return this.stack.pop() || -1;
  }

  increment(k: number, val: number): void {
    const iterator = Math.min(k, this.stack.length);
    for (let i = 0; i < iterator; i++) {
      this.stack[i] = this.stack[i] + val;
    }
  }
}
