function maximum69Number(num: number): number {
    let temp = num;
    let index = -1;
    let pos = 0;

    while (temp > 0) {
        if (temp % 10 === 6) index = pos;
        temp = Math.floor(temp / 10);
        pos++;
    }

    return (index === -1) ? num : num + 3 * Math.pow(10, index);
}