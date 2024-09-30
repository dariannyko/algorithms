function stringHash(s: string, k: number): string {
  let res = "";

  for (let i = 0; i < s.length; i += k) {
    const substr = s.slice(i, i + k);
    const code = substr
      .split("")
      .reduce((sum, curr) => (sum += curr.charCodeAt(0) - 97), 0);
    res += String.fromCharCode((code % 26) + 97);
  }

  return res;
}

stringHash("abcd", 2); // "bf"


// function search(nums: number[], target: number): number {
    
//   const n = nums.length; 
//   let start = 0;
//   let end = n-1;

//   while(start<=end){
//       const mid = Math.floor((start+end)/2);
//       if(nums[mid] === target)return mid;
//       else if(nums[mid]>=nums[start]){
//           // I am on left portion
//           if(target>= nums[start] && target<nums[mid])end = mid-1;
//           else start = mid+1;
//       }else{
//           // I am on right portion
//           if(target>nums[mid] && target<= nums[end])start=mid+1;
//           else end = mid-1;
//       }
//   }
//   return -1;
// };