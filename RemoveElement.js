function removeElement(arr,target){
    let arr1=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=target){
            arr1.push(arr[i])
        }
    }
    return arr1.length;
}
console.log(removeElement([3,2,2,3],3))
console.log(removeElement([0,1,2,2,3,0,4,2],2))