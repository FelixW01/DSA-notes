// Problem Solving Patterns //

// Frequency Counter Pattern
// This pattern uses objects or sets to collect values/frequencies of values
// This can often avoid the need for nested loops or O(N^2) operations with arrays/strings
// Naive approach, O(N^2) time complexity
function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    for(let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1)
    }
    return truel
} 
// Refactored with Frequency Counter Pattern
function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for(let key in frequencyCounter1) {
        if(!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}
// o(n) time complexity since there are no nested loops

// Anagrams
function validAnagram(first, second) {
    // if first and second are not the same length, they can't be anagrams
    if(first.length !== second.length) {
        return false;
    }
    // declare an object to store the frequency of each letter in first
    const lookup = {};

    for(let i = 0; i < first.length; i++) {
        let letter = first[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    for(let i = 0; i < second.length; i++) {
        let letter = second[i];
        // can't find letter or letter is zero then it's not an anagram
        if(!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}
// o(n) time complexity
// validAnagram('anagram', 'nagaram') => true
// Use when you need to compare multiple pieces of data and to see if they consist of the same characters
// ----------------------------------------------------------------------------------------------- //
// Multiple Pointers
// Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
// Naive solution, O(N^2) time complexity
function sumZero(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}
// Refactored with Multiple Pointers
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0) {
            return [arr[left], arr[right]];
        } else if(sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}
// o(n) time complexity 2 pointers side by side
function countUniqueValues(arr){
 if(arr.length === 0) return 0;
  var i = 0;
  for (let j = 1; j < arr.length; j++) {
     if (arr[i] !== arr[j]) {
         i++
         arr[i] = arr[j]
     } 
  }
  return i + 1;
}

// ----------------------------------------------------------------------------------------------- //
// Sliding Window
// This pattern involves creating a window which can either be an array or number from one position to another
// Naive Solution O(N^2) time complexity
function maxSubarraySum(arr, num) {
    if(num > arr.length) {
        return null;
    }
    var max = -Infinity;
    for(let i = 0; i < arr.length - num + 1; i++) {
        temp = 0;
        for(let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if(temp > max) {
            max = temp;
        }
    }
    return max;
}
// Refactored with Sliding Window
// o(n) time complexity
function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null;
    for(let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for(let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
// ----------------------------------------------------------------------------------------------- //
// Divide and Conquer
// This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data
// Naive Solution O(n)) time complexity, linear search
function search( arr, val) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            return i;
        }
    }
    return -1;
}
// Refactored with Divide and Conquer
// o(log n) time complexity, binary search
function search(arr, val) {
    let min = 0;
    let max = arr.length - 1;
    while(min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = arr[middle];
        if(arr[middle] < val) {
            min = middle + 1;
        } else if(arr[middle] > val) {
            max = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}
// Dynamic Programming

// Greedy Algorithms

// Backtracking

// Recursion
// A process (a function in our case) that calls itself
// When we write recursive functions, we keep pushing new functions onto the call stack