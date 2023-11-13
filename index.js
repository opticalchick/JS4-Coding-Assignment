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

//Task 2





