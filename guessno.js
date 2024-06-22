num=10;
let no=prompt("guess number from 1 to 10")
while(no!=num){
    console.log("wrong number guess again")
     no=prompt("guess number from 1 to 10")
}
if(num==no){
    console.log("congrats! correct number")
}

/*
var num=5;
var numb=prompt("guess number from 1 to 10")
//console.log(num===numb?"congrats! correct number":"wrong number guess again")
 for(let i=1;i<10;i++){
    if(num==numb)
        console.log("congrats! correct number")
    else
    console.log("wrong number guess again")
 }
    */