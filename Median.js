function findMeadian(arr1,arr2){
    let i=0;
    let j=0;
    let merg=[];
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
                merg.push(arr1[i]);
                i++;
        }
        else{
            merg.push(arr2[j]);
            j++;
        }
    }
    while(i<arr1.length){
        merg.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        merg.push(arr2[j])
    }
    let len=merg.length;
    if(len%2==0){
        return (merg[len/2-1] + merg[len/2])/2;
    }
    else{
        return   merg[Math.floor(len / 2)];
    }
}
console.log(findMeadian([1, 3], [2]));
console.log(findMeadian([1, 2], [3, 4]));