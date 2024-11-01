// declare a variable to hold the favorite num.
var favNumber = 21; // any number will do.
var userGuess;
//use while loop
while(userGuess!== favNumber){
//prompt user guess
userGuess= parseInt(prompt("Guess my favorite number:"));
//check if the guess is valid or not
if (isNaN(userGuess)){
    console.log("please enter a valid number.");
}else if (userGuess<favNumber){
    console.log("your guess is too low.Try again!");
}else if (userGuess>favNumber){
    console.log("your guess is too high.Try again!");
}else{
    console.log("Yes!You guessed it right!!");
}
}