// // question 1
// var input = prompt("Enter any number character or special letter"); 
// var asciiValue = input.charCodeAt(0);
    
// if (asciiValue >= 48 && asciiValue <= 57) {
//     alert( input + ' is a number.');
// }
// else if (asciiValue >= 65 && asciiValue <= 90) {
//     alert (input + ' is an uppercase letter.');
// }
// else if (asciiValue >= 97 && asciiValue <= 122) {
//   alert (input + ' is a lowercase letter.');
// }
// else {
//   alert( input + ' is a special character.');
// }

// // question 2
// var num1 = +prompt("Enter the first integer:");
// var num2 = +prompt("Enter the second integer:");

// if (num1 > num2) {
//   alert(num1 + ' is larger than ' + num2);
// } else if (num2 > num1) {
//   alert(num2 + ' is larger than ' + num1);
// } else {
//   alert('Both integers are equal.');
// }

// // question 3
// var num = +prompt("Enter a number:");

// if (num > 0) {
//   alert(num + ' is positive.');
// } else if (num < 0) {
//   alert(num + ' is negative.');
// } else {
//   alert('The number is zero.');
// }

// // question 4
// var char = prompt("Enter a character:").toLowerCase();
// if (char=='a'||char=='e'||char=='i'||char=='o'||char=='u') {
//   alert(char + ' is a vowel.');
// } else {
//   alert(char + ' is not a vowel.');
// }

// // question 5
// var pswd = "password123";
// var input = prompt("Please enter your password:");

// if (input === null || input === "") {
//     alert("Please enter your password");
// } else if (input === pswd) {
//     alert("Correct! The password you entered matches the original password");
// } else {
//     alert("Incorrect password");
// }

// // question 6
// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
// greeting = "Good day"; }
// else {
// greeting = "Good evening"; 
// } 
// console.log(greeting)

// // question 7
var time = +prompt("Enter the time in 24-hour clock format (e.g : 1900 for 7pm):");

if (time >= 0 && time < 1200) {
    alert("Good morning!");
} else if (time >= 1200 && time < 1700) {
    alert("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
    alert("Good evening!");
} else if (time >= 2100 && time <= 2359) {
    alert( "Good night!");
} else {
    alert("Invalid time input!");
}



  