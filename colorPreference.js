var colors = [];

//prompt the user to input three colors
for (var i = 0; i < 3; i++){
    var color = prompt("Enter a color you like:");
    colors.push(color); 
    console.log("Updated color list :" + colors);
}
var addMore = true;
while(addMore){
    var newColor= prompt("Enter another color you like(or type exit to stop)");
if (newColor.toLowerCase()==="exit"){
    addMore = false; // exit the loop if the user "exit"
}else{
    colors.push(newColor); //add new color to the array
    console.log("Updated color list:" + colors); //log the updated array
    }
}
console.log("Final color list:"+ colors);
