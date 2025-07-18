class OrderedStream {
    private list
    private pointer
    constructor(n: number) {
        this.list = new Array(n)
        this.pointer = 0
    }

    insert(idKey: number, value: string): string[] {
        this.list[idKey - 1] = value
        let pointerStart = this.pointer
        let a = []
        while(this.list[this.pointer]) {
            a.push(this.list[this.pointer])
            this.pointer++
        }
        if (!a.includes(value)) {
            this.pointer = pointerStart
            return []
        }
        return a
    }
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */