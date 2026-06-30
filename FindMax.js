let arr=[30,20,5,50,,10]
function findMax(a){
    let max=a[0];
for(let i=0;i<a.length;i++){
    if(a[i]>max){
        max=a[i];
    }
}
return max;
}
let maxElement=findMax(arr);
console.log(maxElement);