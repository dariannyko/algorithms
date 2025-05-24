function maxProduct(nums: number[]): number {
    let max = 0;
    let seoncdMax = 0;

    for(let i =0;i<nums.length;i++){
        if(nums[i] > max){
            seoncdMax = max;
            max = nums[i];
        }else if(nums[i] > seoncdMax){
            seoncdMax = nums[i] ;
        }
        
    }
    return (max-1)*(seoncdMax-1);
};