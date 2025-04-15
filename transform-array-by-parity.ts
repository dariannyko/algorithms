function transformArray(nums: number[]): number[] {
    for(let i in nums){
        if(nums[i]%2==0){
          nums[i] = 0;
        }else{
          nums[i] = 1;
        }
    }
    return nums.sort((a,b)=>a-b);
};