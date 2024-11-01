//collect user information
var age = parseInt(prompt("Enter your age:"));

//check if the input is a valid number
if(isNaN(age)){
    console.log("Please eneter a valid number for age");
}else{
    if (age < 5){
        console.log("your are a toddler.");
    }else if (age >=5 && age <=12){
        console.log("you are a child.");
    }else if (age >= 13 && age <=19){
        console.log("your are a teenager.");
    }else if (age >=20 && age <= 35){
        console.log("your are a young adult.");
    }else if (age >=36 && age <=60){
        console.log("you are a middle-aged.")
    }else{
        console.log("you are a senior.");
    }
}