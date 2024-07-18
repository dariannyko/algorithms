{
    // todo
    function equalFrequency(word: string): boolean {
        const array = Array.from<number>({length: 26}).fill(0)

        for (const char of word) {
            const key = char.charCodeAt(0) - 97;

            array[key] += 1;
        }

        const min = Math.min(...array);

        if (array.every(item => item === min)) 
            return true;

        let c = 0;

        array.forEach(item => {
            if (item !== min) {
                console.log(item) 
                c += item - min
            }
        })
        console.log(c)
        return c === 1;
    };

    console.log(equalFrequency("abcc"))
}