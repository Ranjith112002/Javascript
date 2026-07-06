let haystack = "sadbutsad";
let needle = "sad"
function findIndex(str,str2){
    let size=str2.length;
    for(let i=0;i<=str.length-size;i++){
    let sub="";
    for(let j=i;j<size+i;j++){
        sub=sub+str[j]; 
    }
    if(sub===str){
        return i;
    }
    else{
        return -1;
    }
}
}
console.log(findIndex(haystack,needle));