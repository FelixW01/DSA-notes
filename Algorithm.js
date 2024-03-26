// Algorithm:
// A Process or set of steps to accomplish a certain task.

// Game plan for solving a problem
// 1. Understand the problem
// 2. Explore concrete examples
// 3. Break it down
// 4. Solve/Simplify
// 5. Look back and refactor

// Understand the problem
// 1. Can I restate the problem in my own words?
// 2. What are the inputs that go into the problem?
// 3. What are the outputs that should come from the solution to the problem?
// 4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
// (You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering the question at this early stage.)
// 5. How should I label the important pieces of data that are a part of the problem?

// Write a function which takes two numbers and returns their sum. //

// Can I restate the problems in my own words?
// Implement addition
// 2. What are some inputs that og into the problem?
// ints?
// floats?
// what about string for large numbers?
// 3. What are the outputs that should come from the solution to the problem?
// int? float? string?
// 4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
// How should I label the important pieces of data that are a part of the problem?

function addNumbers(num1, num2) {
    return num1 + num2;
}

// Break it down
// Excplicitly write out the steps you need to take.
// Pseudo code

function addNumbers(str) {
    // do something
    // return an object with keys that are lowercase alphanumeric characters in the string; values should be the number of times the character appears in the string
}
function charCount(str) {
    // make object to return at end
    let result = {};
    // loop over string, for each character...
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
       if (/[a-z0-9]/.test(char)) {
        // if the char is a number/letter AND is a key in object, add one to count
        if (result[char] > 0) {
            result[char]++;
        } 
        // if char is a number/letter AND not in object, add it and set value to 1
        else {
            result[char] = 1;
        };
       }        
    }
    // return object at end
        return result;
        // if char is something else (space, period, etc.) don't do anything
}
// console.log(charCount("Hi there!"));

// Refactoring
// Can you check the result?
// Can you derive the result differently?
// Can you understand it at a glance?
// Can you use the result or method for some other problem?
// Can you improve the performance of your solution?
// Can you think of other ways to refactor?
// How have other people solved this problem?

function charCount2(str) {
    let obj = {};
    for (let char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

// In JS regex's performance can vary in various browsers.