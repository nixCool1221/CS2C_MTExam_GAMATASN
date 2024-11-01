// Collect user information
var fullName = prompt("enter your full name:");
var age = parseInt(prompt("enter your age:"));
var favoriteNumber = parseInt(prompt("enter your favorite number:"));

// Collect favorite colors
var favoriteColors = [];
for (var i = 0; i < 3; i++) {
    var color = prompt(" enter a color you like:");
    favoriteColors.push(color); 
}

// Create the userProfile object
var userProfile = {
    name: fullName,
    age: age,
    favoriteNumber: favoriteNumber,
    favoriteColors: favoriteColors
};

console.log(userProfile);