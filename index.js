//console.log(a);

//var a=10;
//console.log(a);
//console.log(b);
//var a=50;
//console.log(a);

//let b=30;
//console.log(b);

//b=30;
//console.log(b);
//const c=30;


//function Declaration
//function functionname(){}

function familyFunction(){
    console.log("hii")
    console.log("hello")
}

//familyFunction();
//familyFunction();
//family();
console.log(family);
var family=function(){   //type error if var called
   console.log("hii")
    console.log("hello")
};
family();

function add(){
let a=4;
let b=5;
    console.log(a+b);
}
add();

//or

function sum(parameter1,parameter2){
    let a=parameter1;
    let b=parameter2;
    console.log(parameter1+parameter2);
}
sum(1,4);
sum(56,87);

//or

function sum(parameter1,parameter2){
    let a=parameter1;
    let b=parameter2;
    console.log(
        "value of parameter1 :",
        parameter1,
        "value of parameter2 :",
        parameter2,
"sum is",
a+b);
    }

//or

let a=()=>{
    console.log("hello");
};
a();
a(2,3);

//call back function

(function (){
    console.log("IIFE");
})();