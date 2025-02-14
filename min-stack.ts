class MinStack {
    private stack: number[];
    private min_stack: number[];
    constructor() {
        this.stack = [];
        this.min_stack = [];
    }

    push(val: number): void {
        this.stack.push(val);
        if (!this.min_stack.length || (this.min_stack.length && this.min_stack[this.min_stack.length - 1] >= val)) {
            this.min_stack.push(val)
        } 
    }

    pop(): void {
        let removedElement = this.stack.pop();
        if (this.min_stack[this.min_stack.length - 1] === removedElement) {
            this.min_stack.pop()
        }
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.min_stack[this.min_stack.length - 1];
    }
}
