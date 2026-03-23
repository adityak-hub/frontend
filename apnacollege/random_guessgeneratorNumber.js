const max = prompt("enter the max number");

const random = Math.floor(Math.random()*max)+1;

let guess = prompt("guess the number");

while(true){
    if(guess=="quit"){
        console.log("user quite");
        break;
    }else if(guess==random){
        console.log("you are right congrats!");
        break;
    }else {
        guess=prompt("your guess was wrong. Please try again");
    }
}