class MyQueue {
  private in: number[];
  private out: number[];

  constructor() {
    this.in = [];
    this.out = [];
  }

  push(x: number): void {
    this.in.push(x);
  }

  pop(): number {
    this.moveInToOut();
    return this.out.pop() ?? -1;
  }

  peek(): number {
    this.moveInToOut();
    return this.out[this.out.length - 1] ?? -1;
  }

  empty(): boolean {
    return this.in.length === 0 && this.out.length === 0;
  }

  private moveInToOut(): void {
    if (this.out.length > 0) {
      return;
    }

    while (this.in.length > 0) {
      this.out.push(this.in.pop()!);
    }
  }
}
