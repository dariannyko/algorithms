function removeTrailingZeros(num: string): string {
    let end = num.length - 1;
    while (end >= 0 && num[end] === '0') {
        end--;
    }
    return num.substr(0, end + 1);
};