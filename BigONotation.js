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