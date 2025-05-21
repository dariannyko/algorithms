function sortSentence(s: string): string {
    let map: any = []

    s.split(' ').forEach(word => {
        map[Number(word.slice(-1)) -1] = word.slice(0, word.length - 1);
    });

    return map.join(' ');
};