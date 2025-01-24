function compress(chars: string[]): number {
    let n = chars.length;
    let idx = 0;
    for (let i = 0; i < n; i++) {
        let ch = chars[i];
        let count = 0;
        while (i < n && chars[i] === ch) {
            count++;
            i++;
        }
        if (count === 1) {
            chars[idx++] = ch;
        } else {
            chars[idx++] = ch;
            for (let digit of count.toString()) {
                chars[idx++] = digit;
            }
        }
        i--;
    }
    chars.length = idx;
    return idx;
};