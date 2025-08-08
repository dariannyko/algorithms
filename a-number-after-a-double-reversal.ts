function isSameAfterReversals(num: number): boolean {
    if (num == 0) {
        return true;
    } else if (num % 10 == 0) {
        return false;
    } else {
        return true;
    }
};