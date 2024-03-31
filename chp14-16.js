// // Question 1
// let studentNamesLit = [];

// // Question 2
// let studentNamesObj = new Array();

// // Question 3
// let strArray = ["apple", "banana", "orange"];

// // Question 4
// let numArray = [1, 2, 3, 4, 5];

// // Question 5
// let boolArray = [true, false, true];

// // Question 6
// let mixedArray = ["apple", 10, true, "banana", false];

// // Question 7
// let qualArray = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// document.write("<h3>Educational Qualifications in Pakistan:</h3>");
// document.write("<ul>");
// for (let i = 0; i < qualArray.length; i++) {
//     document.write(`<li>${qualArray[i]}</li>`);
// }
// document.write("</ul>");


// // Question 8
// let studentNames = ["Aqib", "Shayan", "Affan"];
// let scores = [480, 420, 450];

// let totalMarks = 500;
// let percentages = [];
// for (let i = 0; i < scores.length; i++) {
//     percentages[i] = (scores[i] / totalMarks) * 100;
// }
// for (let i = 0; i < studentNames.length; i++) {
//     document.write(`Score of ${studentNames[i]} is ${scores[i]}. Percentage: ${percentages[i]}%<br>`);
// }

// Question 9
// let colorArray = ["Red", "Green", "Blue"];

// document.write(`Original array: ${colorArray.join(', ')}<br>`);

// let colorToAddBeginning = prompt("Enter a color to add to the beginning:");
// colorArray.unshift(colorToAddBeginning);
// document.write(`Array after adding color to the beginning: ${colorArray.join(', ')}<br>`);

// let colorToAddEnd = prompt("Enter a color to add to the end:");
// colorArray.push(colorToAddEnd);
// document.write(`Array after adding color to the end: ${colorArray.join(', ')}<br>`);

// colorArray.unshift("Yellow", "Orange");
// document.write(`Array after adding two colors to the beginning: ${colorArray.join(', ')}<br>`);

// colorArray.shift();
// document.write(`Array after deleting the first color: ${colorArray.join(', ')}<br>`);

// colorArray.pop();
// document.write(`Array after deleting the last color: ${colorArray.join(', ')}<br>`);

// let indexToAdd = prompt("Enter the index to add color:");
// let colorToAdd = prompt("Enter the color to add:");
// colorArray.splice(indexToAdd, 0, colorToAdd);
// document.write(`Array after adding color at index ${indexToAdd}: ${colorArray.join(', ')}<br>`);

// let indexToDelete = prompt("Enter the index to delete color(s):");
// let countToDelete = prompt("Enter the number of colors to delete:");
// colorArray.splice(indexToDelete, countToDelete);
// document.write(`Array after deleting colors from index ${indexToDelete}: ${colorArray.join(', ')}<br>`);

// Question 10
let scoresArray = [78, 92, 85, 65, 95];
scoresArray.sort();
document.write(`Sorted array of student scores: ${scoresArray.join(', ')}<br>`);

// Question 11
let citiesArray = ["New York", "London", "Paris", "Tokyo", "Sydney"];
document.write(`Original Array of Cities: [${citiesArray.join(', ')}]<br>`);
let selectedCities = citiesArray.slice(1, 4);
document.write(`Selected cities array: ${selectedCities.join(', ')}<br>`);

// Question 12
let arr = ["This", "is", "my", "cat"];
let singleString = arr.join(' ');
document.write(`Array elements: [${arr.join(', ')}]<br>`);
document.write(`Single string: ${singleString}<br>`);

// Question 13: FIFO 
let fifoArray = [];
fifoArray.push("pen");
fifoArray.push("keys");
fifoArray.push("phone");

document.write("Input: pen, keys, phone<br>");
document.write("Output:<br>");
for (let item of fifoArray) {
    document.write(item + "<br>");
}

// Question 14: LIFO 
let lifoArray = [];
lifoArray.push("pen");
lifoArray.push("keys");
lifoArray.push("phone");

document.write("<br>Input: pen, keys, phone<br>");
document.write("Output:<br>");
while (lifoArray.length > 0) {
    document.write(lifoArray.pop() + "<br>");
}

// Question 15
let companies = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
for (let manufact of companies) {
    document.write(`<option>${manufact}</option>`);
}
document.write("</select>");
