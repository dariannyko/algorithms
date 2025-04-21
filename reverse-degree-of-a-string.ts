function reverseDegree(s: string): number {
    let alphabet = new Map()
    let value = 26
    let total = 0
    for (let i = 97; i <= 122; i++) {
        alphabet.set(String.fromCharCode(i), value--);
    }
    for (let j = 0; j < s.length; j++) {
        total += (j + 1) * alphabet.get(s[j]);
    }
    // todo
    return total
};