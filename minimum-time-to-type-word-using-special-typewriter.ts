function minTimeToType(word: string): number {
    const base = 'a'.charCodeAt(0);
    const last = 'z'.charCodeAt(0);
    let p = base;
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        const c = word.charCodeAt(i);
        const max = Math.max(p, c);
        const min = Math.min(p, c);
        count += Math.min(last - max + min - base + 1, max - min) + 1;
        p = c;
    }
    return count;
}