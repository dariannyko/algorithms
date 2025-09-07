function findWords(words: string[]): string[] {
    const regexFirstRow = /^[qwertyuiop]+$/;
    const regexSecondRow = /^[asdfghjkl]+$/;
    const regexThirdRow = /^[zxcvbnm]+$/;

    return words.filter(word => regexFirstRow.test(word.toLowerCase()) || regexSecondRow.test(word.toLowerCase()) || regexThirdRow.test(word.toLowerCase()));
};