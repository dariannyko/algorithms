function decodeMessage(key: string, message: string): string {
    const cipher = new Map([[" ", " "]])

    for (let i = 0; i < key.length; i++) {
        let char = key[i]
        if (cipher.has(char)) {
            continue
        }

        cipher.set(char, String.fromCharCode(97 + cipher.size - 1))

        if (cipher.size >= 27) {
            break
        }
    }

    return Array.from(message).map(char => cipher.get(char)).join('')
};