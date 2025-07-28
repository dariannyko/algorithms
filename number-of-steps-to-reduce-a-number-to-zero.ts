function numberOfSteps(num: number) {
    let res = 0;
    while (num % 2 ? num-- : num /= 2) res++;
    return res;
};