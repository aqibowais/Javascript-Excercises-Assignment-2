// // question 1
// var cityName = prompt("Enter city name: ");

// if (cityName.toLowerCase() === "karachi") {
//     alert("Welcome to city of lights");
// }

// // question 2
// var gender = prompt("Enter your gender: ");

// if (gender.toLowerCase() === "male") {
//     alert("Good Morning Sir.");
// } else if (gender.toLowerCase() === "female") {
//     alert("Good Morning Ma'am.");
// } else {
//     alert("Greetings!");
// }

// question 3
// var signalColor = prompt("Enter the color of the traffic signal: ");
// var colors = ['red','green','yellow']
// if(colors.includes(signalColor)){
// document.write("<table width='400' style='border: 1px solid black; background-color: lightblue;'><tr><th>Signal Color</th><th>Message</th></tr><br><tr><th>Red</th><th>Must Stop</th></tr><br><tr><th>Yellow</th><th>Ready to Move</th></tr><br><tr><th>Green</th><th>Move now</th></tr><br></table>");
// }else{
//     alert('Invalid Color')
// }

// // question 4
// var remainingFuel = parseFloat(prompt("Enter remaining fuel in car (in litres): "));

// if (remainingFuel < 0.25) {
//     alert("Please refill the fuel in your car");
// }

// // question 5 part a
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }
// // question 5 part b
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// // question 5 part c
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }

// question 5 part d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }

// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }

// question 5 part e
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }

// // question 6
// var num1 = +prompt('Enter marks of Subject 1')
// var num2 = +prompt('Enter marks of Subject 2')
// var num3 = +prompt('Enter marks of Subject 3')
// var precentage = ((num1+num2+num3)/300)*100
// var grade,remarks;
// if (precentage >= 80) {
//     grade= ' A-one'
//     remarks= 'Excellent' 
// } else if (precentage >= 70) {
//      grade= 'A'
//      remarks= 'Good' 
// } else if (precentage >= 60) {
//     grade= 'B'
//     remarks= 'You need to improve' 
// } 
// else {
//     grade= 'Fail'
//     remarks= 'sorry' 
// }

// document.write("<h1>MarkSheet</h1>");
// document.write("Total Marks: 300<br>");
// document.write("Obtained Marks: " + (num1 + num2 + num3) + "<br>");
// document.write(`Percentage: ${precentage}%<br>`);
// document.write(`Grade: ${grade}<br>`);
// document.write(`Remarks: ${remarks}<br>`);


// question 7
var secretNumber = Math.floor(Math.random() * 10) + 1;
var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10): "));

if (userGuess === secretNumber) {
    alert("Bingo! Correct answer.");
} else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
    alert("Close enough to the correct answer.");
} else {
    alert("Sorry, incorrect guess. The correct answer was " + secretNumber + ".");
}

// question 8
var number = parseInt(prompt("Enter a number: "));

if (number % 3 === 0) {
    alert(number + " is divisible by 3.");
} else {
    alert(number + " is not divisible by 3.");
}

// question 9
var number = parseInt(prompt("Enter a number: "));

if (number % 2 === 0) {
    alert(number + " is an even number.");
} else {
    alert(number + " is an odd number.");
}

// question 10
var temperature = parseFloat(prompt("Enter the temperature: "));

if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("It's freezing outside!");
}

// question 11
var num1 = parseFloat(prompt("Enter the first number: "));
var num2 = parseFloat(prompt("Enter the second number: "));
var operation = prompt("Enter the operation (+, -, *, /, %): ");

var result;

if (operation === '+') {
    result = num1 + num2;
} else if (operation === '-') {
    result = num1 - num2;
} else if (operation === '*') {
    result = num1 * num2;
} else if (operation === '/') {
    if (num2 === 0) {
        result = "Cannot divide by zero";
    } else {
        result = num1 / num2;
    }
} else if (operation === '%') {
    result = num1 % num2;
} else {
    result = "Invalid operation";
}

alert("Result: " + result);

