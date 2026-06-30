let arr=[30,20,5,50,,10]
function findMin(a){
    let min=a[0];
for(let i=0;i<a.length;i++){
    if(a[i]<min){
        min=a[i];
    }
}
return min;
}
let maxElement=findMin(arr);
console.log(maxElement);