// A way of generalizing code and it's performance to other pieces of code
// Big O, A numeric represantation of the performance of code
// Performance matters, especially when you're working with large data sets
// It's important to have a precise vocabulary to talk about how our code performs

// Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n

// Solution 1
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

// console.log(addUpTo(100))

// Solution 2
function addUpTo2(n) {
    return n * (n + 1) / 2;
}

// console.log(addUpTo2(100))

// What does better mean?
// Faster? Less memory intensive? More readable?

// variables to check time elapsed.
var t1 = performance.now();
var t2 = performance.now();

// addUpTo(1000000000, 'Solution 1');

// Solution 2 is clearly faster and more efficient than Solution 1
addUpTo2(1000000000, 'Solution 2');

console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds.`)
// Counting the time it takes doesn't accurately represent the performance of the code
// Big O counts the number of simple operations the computer has to perform instead
// Big O notation is a way to formalize fuzzy counting
// It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow

// Big O Notation

// o(1) - Constant Time
function addUpTo(n) {
    return n * (n + 1) /2;
}

// o(n) - Linear Time
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

// o(n * n) - Quadratic Time
// Nested loops creates o(n squared)
function printAllPairs(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}