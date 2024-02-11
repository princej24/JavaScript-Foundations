// Exercise 1: Variables
var firstName = "John";

var lastName = "Doe";
console.log("Exercise  1: Hello, " + firstName + " " + lastName + "!");

// Exercise 2: GS
var globalVar = 10;
console.log("Exercise2: globalVar =", globalVar);
if (true) {
    var localVar = 20;
}
// Accessing localVar outside the block
console.log("Exercise 2: localVar outside block =", localVar);
// Observation: localVar is accessible outside the block beacuse  var being function-scoped, not block-scoped.

// Exercise 3: Ternary 
var number = 7;
var message = (number % 2 === 0) ? "Even number" : "Odd number";
console.log("Exercise 3: " + message);

// Exercise 4: String Concatenation
var fruit1 = "tomato";
var fruit2 = "Banana";
var fruitsMessage = "Exercise 4: " + fruit1 + " " + fruit2;
console.log(fruitsMessage);

// Exercise 5: Ternary Operator with String Concatenation
var userName = "prince muturi";
var isLoggedIn = true;
var greetingMessage = isLoggedIn ? "Welcome back, " + userName + "!" : "Hello, " + userName + "! Please log in.";
console.log("Exercise  5: " + greetingMessage);

// Exercise 6: Global vs. Local Scope
{
    var localVar2 = 5;
    console.log("Exercise 6 : localVar inside block =", localVar2);
}
var globalVar2 = 10;
console.log("Exercise 6 : globalVar outside block =", globalVar2);
// Observation: localVar is accessible outside the block due to var being function-scoped, not block-scoped.

// Exercise 7:
var firstName2 = "prince ";
var lastName2 = "jeff";
var fullName = firstName2 + " " + lastName2;
console.log("Exercise 7: Full Name:", fullName, "(Length:", fullName.length + ")");

// Exercise 8: 
var product = "Laptop";
var discount = 20;
var discountMessage = (discount === 20) ? "20 % discount on " + product + "!" : "No discount available for " + product;
console.log("Exercise 8: " + discountMessage);



// Exercise 9: 
var name3 = "jack";
var place = "the beach";
var activity = "swimming";
var story = "Exercise 9: Once upon a time, " + name3 + " visited " + place + " and enjoyed " + activity + ".";
console.log(story);
