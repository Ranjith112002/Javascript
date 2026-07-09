function firstandLastIndex(arr,target){
    function first(){
        let low=0;
        let high=arr.length-1;
        let ans=-1;
        while(low<=high){
            let mid=Math.floor((low+high)/2);
            if(target===arr[mid]){
                ans=mid;
                high=mid-1;
            }
            else if(target<arr[mid]){
                high=mid-1;
            }
            else{
                low=mid+1;
            }
        }
        return ans;
    }
    function last(){
        let low=0;
        let high=arr.length-1;
        let ans=-1;
        while(low<=high){
            let mid=Math.floor((low+high)/2);
            if(target===arr[mid]){
                ans=mid;
                low=mid+1;
            }
            else if(target<arr[mid]){
                high=mid-1;
            }
            else{
                low=mid+1;
            }
        }
        return ans;
    }
    return [first(),last()]
}
console.log(firstandLastIndex([5,7,7,8,8,10],8))
console.log(firstandLastIndex([5,7,7,8,8,10],6))