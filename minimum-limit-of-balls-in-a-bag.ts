function minimumSize(nums: number[], maxOperations: number): number {
    const maxBagSize = nums.reduce((prevMax,curr)=>Math.max(curr,prevMax),0);
       let left = 0, right = maxBagSize, minPenalty = right;
       while(left<=right){
           const mid = left + Math.floor((right-left)/2)
           let maxOp = 0;
           for(let i = 0 ; i<nums.length ; i++){
               maxOp += Math.floor((nums[i]-1) / mid)
           }
           if(maxOp <= maxOperations){
               minPenalty=mid;
               right=mid-1;
           }else{
               left = mid+1;
           }
       }
       return minPenalty;
   };