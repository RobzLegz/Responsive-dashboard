// This is a comment: console.log(...) writes something to console in browser.
console.log("These are the basics of JavaScript.");

/**
 * The PI number up to 10 decimals.
 */
const pi = 3.1415926535;

/*
 * Variables store data that can be used later.
 * Most popular data types are number, string and boolean.
 */
var number1 = 10;
var string1 = "apple";
var boolean1 = true;
let thisIsALet = "let is block scoped";

console.log(number1 + string1);

var sum = number1 + 12;
console.log(sum);
sum = sum + 2;
console.log(sum);

/*
 * Create two new variables (any two numbers).
 * Create another variable that calculates the difference (-).
 * Write the difference variable to console.
 */
var a = 7;
var b = 9;
var diff = a - b;
console.log("The difference between a and b: " + diff);

function manipulateDiff() {
    console.log("Start of manipulateDiff function");
    // Take the diff variable and add 5 to it, then divide everything with 2;
    diff = (diff + 5) / 2;
}

manipulateDiff();
console.log(diff);
manipulateDiff();
manipulateDiff();
console.log(diff);

/*
 * Create a function called "manipulateA".
 * Take the variable a and multiply it by 2.
 * Call the manipulateDiff() inside this function.
 * console.log the sum of a and diff.
 */
function manipulateA() {
    a = a * 2;
    manipulateDiff();
    console.log(a + diff);
}

manipulateA();

// Set the variable a to 10 and b to 5 * 2;
a = 10;
b = 5 * 2;

if (a === b) {
    // code if true
    console.log("A is equal to B.");
} else {
    // code if false
    console.log("A is different from B.");
}

/*
    most popular comparisons
    ===         ?equal
    >   <       larger than, less than
    >=  <=      equal or larger/less than
    !           not (reverses boolean)    

    && (AND) checks if both conditions are true
    || (OR)  checks if at least 1 is true
 */

let vehicle = "plane";
let wings = false;

// If the vehicle is a car OR a bike, then log "road"
// Else If the vehicle is a plane AND has wings, then log "sky"
// Else if the vehicle is a boat, then log "water"
// If everything was false, then log "unknown"

if (vehicle === "car" || vehicle === "bike") {
    console.log("road");
} else if (vehicle === "plane" && wings) {
    console.log("sky");
} else if (vehicle === "boat") {
    console.log("water");
} else {
    console.log("unknown");
}

// Recap exercise
a = 10;
let fruit = "apple";

// If a is larger than 5 AND fruit is "orange", then set a to 1
// Else if fruit is just "orange", then set a to -1
// Otherwise, set a to 2
// Write a to console with a string "A is now " ... a
if (a > 5 && fruit === "orange") {
    a = 1;
} else if (fruit === "orange") {
    a = -1;
} else {
    a = 2;
}
console.log("A is now " + a);

/*
 * let i = 0    i starts at 0
 * i < 5        loop repeats until i is 5 (not included), so largest i can be is 4
 * i++          increase i by 1 each loop
 */
for (let i = 0; i < 5; i++) {
    console.log("Loop: " + i);
}

// Array - a list of variables, objects, data
let exampleArray = ["house", "car", "door"];
console.log("Example array: " + exampleArray + " is this long = " + exampleArray.length);
exampleArray.push("window");
console.log("First item in array: " + exampleArray[0]);
// Mini task: set the first item to "office" and set the third item to "bike"
exampleArray[0] = "office";
exampleArray[2] = "bike";
console.log("exampleArray after modifications: " + exampleArray);

// Jsons - List, but rather than index (numbers), values are stores by keys (id / names)
let exampleJson = {
    color: "red", // values seperated by comma
    vehicle: "boat",
    speed: 13
}
console.log("Type of vehicle " + exampleJson["vehicle"]); // exampleJson.vehicle also works

// Exercise
let exerciseArray = [1, 3, 5];
/*
 * Write a loop that [starts with 3 as iterator] and [ends with 15 (not included)] and [increases by 1 each loop]
 * Loop logs (writes to console) the iterator
 * If the iterator is larger than 10, push the iterator in the array
 */
for (let i = 3; i < 15; i++) {
    console.log(i);
    if (i > 10) {
        exerciseArray.push(i);
    }
}
// Log the result
console.log(exerciseArray);
