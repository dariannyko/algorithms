function countKConstraintSubstrings(s: string, k: number): number {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let ones = 0;
        let zeros = 0;
        if (s[i] == "1") {
            ones++;
        } else {
            zeros++;
        }
        count++;
        for (let e = i + 1; e < s.length; e++) {
            if (s[e] == "1") {
                ones++;
            } else {
                zeros++;
            }
            if(ones <= k || zeros <= k) count++;
        }
    }
    return count;
};