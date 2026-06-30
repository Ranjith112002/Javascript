function outer(){
    console.log("outter function start excecution")
    let outvar=10;
    function inner(){
        console.log("inner function start");
        console.log(outer);
         console.log("inner function end");
    }
     console.log("outter function finish excecution");
     return inner;

}
exmp=outer();
exmp();
