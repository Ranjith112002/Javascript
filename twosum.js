let nums = [3,2,4], target = 6
//Output: [1,2]
function twoSum(arr,target){
   let map=new Map();
   for(let i=0;i<arr.length;i++){
    let complement=target-arr[i];
    if (map.has(complement)) {
            return [map.get(complement), i];
        }
        else{
            map.set(arr[i],i);
        }
   }
   return [];
}
console.log(twoSum(nums, target));