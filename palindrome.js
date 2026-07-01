let number=121;
function isPalindrome(num){
    let original=num;
    let rev=0;
    while(num>0){
        let rem=num%10;
        rev=rev*10+rem;
        num=num/10;
    }
    return original===rev;

}
if(isPalindrome(number)){
    console.log("given number is palindrome");
}
else{
    console.log("given number is not a palindrome");
}