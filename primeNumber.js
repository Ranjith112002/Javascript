let num=7;
function checkPrime(){
    if(num<=1){
        console.log("given number is not a prime number");
    }
    let count=0;
    for(let i=1;i<=num;i++){
        if(num%i==0){
            count++;
        }
    }
    if(count==2){
        console.log("given number is prime");
    }
}
checkPrime(num);