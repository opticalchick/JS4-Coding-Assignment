//Task 1 
// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// Programmatically subtract the value of the first element in the array from the value in the last element of the array.
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] - ages[0] is not allowed!
// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
// Use a loop to iterate through the array and calculate the average age.

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
let minusAge = ages[ages.length - 1] - ages[0];
console.log(minusAge);

ages.push(17);
let minusAge2 = ages[ages.length - 1] - ages[0];
console.log(minusAge2);

let sumOfAges = 0;
for (let i = 0; i < ages.length; i++) {
    sumOfAges += ages[i]
}

let average = sumOfAges / ages.length;
console.log(average);

// //Task 2
// Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
// Use a loop to iterate through the array and calculate the average number of letters per name.
// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let total = 0;
for (let i = 0; i < names.length; i++) {
    total += names[i].length;
}
let average2 = total / names.length;
console.log(average2);

let result = '';
for (let i = 0; i < names.length; i++) {
    result = result.concat(names[i]);
    if (i < names.length - 1) {
        result = result.concat(', ');
    }
}
console.group(result);

//Task 3
// How do you access the last element of any array?

console.log('Array.length - 1 will access the last element of an array.');

//Task 4
//How do you access the first element of any array?

console.log('The first element of an array is accessed by arrayname[0].');


//Task 5
//Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:

// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array

let nameLengths = [];
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log(nameLengths);

//Task 6
//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

//calculates the sum of the above nameLengths array
let sum = 0;
for (let i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i];
}
console.log('The sum is ' + sum);

//Task 7
//Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

function thisFunction(word, n) {
    let result = "";
    for (let i = 0; i < n; i++) {
        result += word;
    } return result;
};
console.log(thisFunction('Hello', 3));

//Task 8
//Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.

function fullName(firstName, lastName) {
    let fullName = firstName + ' ' + lastName;
    console.log(fullName);
}
fullName('Molly', 'Pug');

//Task 9
//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.


//Task 10
//Write a function that takes an array of numbers and returns the average of all the elements in the array.

//Task 11
//Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

//Task 12
//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.