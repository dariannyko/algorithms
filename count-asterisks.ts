function countAsterisks(s: string): number {
    let result: number = 0;
    let ss: string[] = s.split('|');

    for (let i = 0; i < ss.length; i += 2) {
        for (let char of ss[i]) {
            if (char === '*') {
                result++;
            }
        }
    }

    return result;
};