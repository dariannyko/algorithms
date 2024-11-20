function containsNearbyDuplicate(nums: number[], k: number): boolean {

    const mapArr = new Map();
    
    for(let i = 0;  i < nums.length;i++){

        let count  = mapArr.get(nums[i]);
        if(count >= 0  && Math.abs( count - i) <= k){
            return true;
        }
        mapArr.set(nums[i] , i);
    }
    return false
};