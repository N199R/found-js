function add7(num){
    return num +7;
}
console.log(add7(7));

function multiply(z, x){
    return z * x;
}
console.log(multiply(2, 2));
function capitalize(talk){
    let result = talk[0].toUpperCase() + talk.slice(1);
    return result;
}
console.log(capitalize("nasser"));
function lastLetter(convo){
 let tt=convo.length;

 return convo[tt-1];
}
console.log(lastLetter("abxd"));

function fezz(){
let answer=parseInt(prompt("please enter a number"));

for(let i=1; i<=answer; i++){
    if(i %5===0 & answer%3==0){
        console.log("Fizz")
    }else if(i%5===0){
        console.log("Buzz");
    }else if( i%3==0){
        console.log("FizzBuzz");
    }else{
    console.log(i);
}
}
}
fezz();


