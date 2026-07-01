let name="ranjith";
function reverse(){
    let rev="";
    for(let i=name.length-1;i>=0;i--){
        rev=rev+name[i];
    }
    return rev;
}
console.log(reverse(name));