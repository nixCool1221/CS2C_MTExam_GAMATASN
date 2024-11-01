// Collect user information using prompt

var subjectTitle = prompt("Please enter your subject title:");
var classroom = prompt("Enter your classroom:");
var classSchedule = prompt("Enter your class schedule (Time, Days):");
var classInstructor = prompt("Enter your class instructor's name:");
var studentName = prompt("Please enter your name:");

// Log the collected information to the console in the specified format
console.log(studentName + " is currently enrolled in " + subjectTitle + 
            " with a class schedule of " + classSchedule + 
            " at room " + classroom + 
            ". The instructor for the subject is " + classInstructor + ".");