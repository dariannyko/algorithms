function uniqueMorseRepresentations(words: string[]): number {
    let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let ans = new Set<string>([]);

    for(let w of words){
        let t = '';
        for (let l of w){
            t += morse[l.charCodeAt(0) - 'a'.charCodeAt(0)];
        }
        ans.add(t);
    }

    return ans.size;
};