let str="mississippi";
let length=4;
function subStringOflength(str,size){
    for(let i=0;i<=str.length-size;i++){
    let sub="";
    for(let j=i;j<size+i;j++){
        sub=sub+str[j]; 
    }
    console.log(sub);
}
}
subStringOflength(str,length)
