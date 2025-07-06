/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    if(s.length === 0) {
        throw new Error('Constraints not met')
    }
    let leftPointer = 0;
    let rightPointer = s.length - 1;
    
    while(leftPointer < rightPointer) {
        const temp = s[leftPointer];
        s[leftPointer] = s[rightPointer];
        s[rightPointer] = temp;
        leftPointer++;
        rightPointer--;
    }
};