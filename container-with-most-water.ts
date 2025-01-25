function maxArea(height: number[]): number {
    let leftIndex = 0;
    let rightIndex = height.length - 1;
    let maxVolume = 0;

    while (leftIndex < rightIndex) {
        const leftValue = height[leftIndex];
        const rightValue = height[rightIndex];
        const width = rightIndex - leftIndex;
        const currVolume = calcVolume(leftValue, rightValue, width);
        maxVolume = Math.max(maxVolume, currVolume);

        if (leftValue < rightValue) leftIndex++;
        else rightIndex--;
    }

    return maxVolume;
};

function calcVolume(left: number, right: number, width: number): number {
    return Math.min(left, right) * width;
}