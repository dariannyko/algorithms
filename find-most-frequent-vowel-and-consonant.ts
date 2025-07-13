function isVowel(char: string): boolean {
    return 'aeiou'.includes(char.toLowerCase());
}

function maxFreqSum(s: string): number {
    const map = new Map<string, number>()
    for (let letter of s) {
        map.set(letter, map.has(letter) ? map.get(letter) + 1 : 1)
    }
    const keys = map.keys()
    let maxVowel = 0;
    let maxConsistent = 0;
    for (let key of keys) {
        const value = map.get(key)
        if (isVowel(key) && value > maxVowel) {
            maxVowel = value;
        } else if (!isVowel(key) && value > maxConsistent) {
            maxConsistent = value
        }
    }
    return maxVowel + maxConsistent;
};