function palindrome(s){
    let i=0;
    let j=s.length-1;
    while(i<=j){
        if(s[i]==s[j]){
            i++;
            j--;
        }
        else{
            return false
        }
    }
    return true
}
function longestPalindrome(str){
    for(let size=str.length;size>=1;size--){
        for(let i=0;i<=str.length-size;i++){
    let sub="";
    for(let j=i;j<size+i;j++){
        sub=sub+str[j];
    } 
    if(palindrome(sub)){
        return sub;
    }
}
    }
}
console.log(longestPalindrome("mississippi"));