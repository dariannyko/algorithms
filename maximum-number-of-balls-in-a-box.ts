function countBalls(lowLimit: number, highLimit: number): number {
    const hash: Record<number, number> = {};

    for (let i = lowLimit; i <= highLimit; i++) {
        let sum = 0;
        let num = i;

        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }

        if (!hash[sum]) {
            hash[sum] = 0;
        }

        hash[sum]++;
    }

    return Math.max(...Object.values(hash));
};