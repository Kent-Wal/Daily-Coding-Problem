/*
    Difficulty: Hard
    Date: October 23, 2025

    Given an array of integers, return a new array such that each element 
    at index i of the new array is the product of all the numbers in the original array except the one at i.

    For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. 
    If our input was [3, 2, 1], the expected output would be [2, 3, 6].
*/

function arrayProduct(nums){
    let productArray = [];

    let first = 1;
    for(let i = 0; i < nums.length; i++){
        productArray.push(first);
        first *= nums[i];
    }

    let second = 1;
    for(let i = nums.length - 1; i >= 0; i--){
        productArray[i] *= second;
        second *= nums[i];
    }

    return productArray;
}

console.log(arrayProduct([1, 2, 23, 0]));
console.log(arrayProduct([1, 2, 3, 4, 5]));

